package com.pre006.stackoverflow.question.controller;

import com.pre006.stackoverflow.answer.dto.AnswerDto;
import com.pre006.stackoverflow.answer.mapper.AnswerMapper;
import com.pre006.stackoverflow.global.SingleResponse;
import com.pre006.stackoverflow.question.dto.QuestionDto;
import com.pre006.stackoverflow.question.entity.Question;
import com.pre006.stackoverflow.question.mapper.QuestionMapper;
import com.pre006.stackoverflow.global.response.MultiResponseDto;
import com.pre006.stackoverflow.question.service.QuestionService;
import com.pre006.stackoverflow.question.utils.UriCreator;
import com.pre006.stackoverflow.tag.dto.TagDto;
import com.pre006.stackoverflow.tag.entity.Tag;
import com.pre006.stackoverflow.tag.mapper.TagMapper;
import com.pre006.stackoverflow.tag.service.TagService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.validation.Valid;
import javax.validation.constraints.Positive;
import javax.validation.constraints.Size;
import java.net.URI;
import java.util.List;

@Slf4j
@RestController
@CrossOrigin
@Validated
@RequestMapping("/questions")
public class QuestionController {
    private final static String QUESTION_DEFAULT_URL = "/questions";
    private final QuestionService questionService;
    private final TagService tagService;
    private final QuestionMapper mapper;
    private final AnswerMapper answerMapper;
    private final TagMapper tagMapper;

    public QuestionController(QuestionService questionService,
                              TagService tagService,
                              QuestionMapper mapper,
                              AnswerMapper answerMapper,
                              TagMapper tagMapper) {
        this.questionService = questionService;
        this.tagService = tagService;
        this.mapper = mapper;
        this.answerMapper = answerMapper;
        this.tagMapper = tagMapper;
    }

    @PostMapping
    public ResponseEntity postQuestion(@Valid @RequestBody QuestionDto.PostDto requestBody) {
        Question createQuestion = questionService.createQuestion(mapper.postDtoToQuestion(requestBody));
        QuestionDto.ResponseDto response = mapper.questionToResponseDto(createQuestion);

        URI location = UriCreator.createUri(QUESTION_DEFAULT_URL, createQuestion.getQuestionId());

        return ResponseEntity.created(location).body(response);
    }

    @GetMapping("/{question-id}")
    public ResponseEntity getQuestion(@Positive @PathVariable("question-id") Long questionId,
                                      HttpServletRequest servletRequest,
                                      HttpServletResponse servletResponse) {
        Question findQuestion = questionService.findQuestion(questionId);
        QuestionDto.ResponseDto response = mapper.questionToResponseDto(findQuestion);

        questionService.viewCountValidation(findQuestion, servletRequest, servletResponse);

        return new ResponseEntity(response, HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity getQuestions() {
        List<Question> questions = questionService.findQuestions();
        List<QuestionDto.ResponseDto> response = mapper.questionsToResponseDtos(questions);

        return new ResponseEntity(
                new SingleResponse<>(response), HttpStatus.OK);
    }

    @GetMapping("/tagged/{tag-name}")
    public ResponseEntity getQuestionsByTag(@Size(max = 20, message = "글자수 초과")
                                                @PathVariable("tag-name") String tagName) {
        Tag tag = tagService.findTag(tagName);
        List<Question> questions = mapper.tagToQuestions(tag);
        List<QuestionDto.ResponseDto> response = mapper.questionsToResponseDtos(questions);

        return new ResponseEntity<>(
                new SingleResponse<>(response), HttpStatus.OK);
    }

    @GetMapping("/{question-id}/answers")
    public ResponseEntity getAnswersByQuestionId(@Positive @PathVariable("question-id") Long questionId) {
        Question question = questionService.findQuestion(questionId);
        List<AnswerDto.Response> answers =
                answerMapper.answersToAnswerResponses(question.getAnswers());
        return new ResponseEntity(
                new SingleResponse<>(answers), HttpStatus.OK
        );
    }

    @GetMapping("/{question-id}/tags")
    public ResponseEntity getTagsByQuestionId(@Positive @PathVariable("question-id") Long questionId) {
        Question question = questionService.findQuestion(questionId);
        List<Tag> tags = mapper.questionToTags(question);
        List<TagDto.ResponseDto> response = tagMapper.tagsToResponseDtos(tags);

        return new ResponseEntity(
                new SingleResponse<>(response), HttpStatus.OK
        );
    }

    @PatchMapping("/{question-id}")
    public ResponseEntity patchQuestion(@Positive @PathVariable("question-id") Long questionId,
                                        @Valid @RequestBody QuestionDto.PatchDto requestBody) {
        requestBody.setQuestionId(questionId);
        Question updateQuestion = questionService.updateQuestion(mapper.patchDtoToQuestion(requestBody));
        QuestionDto.ResponseDto response = mapper.questionToResponseDto(updateQuestion);

        URI location = UriCreator.createUri(QUESTION_DEFAULT_URL, updateQuestion.getQuestionId());

        return ResponseEntity.status(HttpStatus.OK)
                .location(location)
                .body(response);
    }

    @DeleteMapping("/{question-id}")
    public ResponseEntity deleteQuestion(@Positive @PathVariable("question-id") Long questionId) {
        // todo: jwt 에서 memberId 파싱

        questionService.deleteQuestion(questionId);
        log.info("# DELETE question-id : " + questionId);

        return ResponseEntity.noContent().build();
    }
}