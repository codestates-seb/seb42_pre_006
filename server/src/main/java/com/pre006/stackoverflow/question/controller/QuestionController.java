package com.pre006.stackoverflow.question.controller;

import com.pre006.stackoverflow.global.SingleResponse;
import com.pre006.stackoverflow.question.dto.QuestionDto;
import com.pre006.stackoverflow.question.entity.Question;
import com.pre006.stackoverflow.question.mapper.QuestionMapper;
import com.pre006.stackoverflow.global.response.MultiResponseDto;
import com.pre006.stackoverflow.question.service.QuestionService;
import com.pre006.stackoverflow.question.utils.UriCreator;
import com.pre006.stackoverflow.tag.entity.Tag;
import com.pre006.stackoverflow.tag.service.TagService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.net.URI;
import java.util.List;

@Slf4j
@RestController
@CrossOrigin
@RequestMapping("/questions")
public class QuestionController {
    private final static String QUESTION_DEFAULT_URL = "/questions";
    private final QuestionService questionService;
    private final TagService tagService;
    private final QuestionMapper mapper;

    public QuestionController(QuestionService questionService, TagService tagService, QuestionMapper mapper) {
        this.questionService = questionService;
        this.tagService = tagService;
        this.mapper = mapper;
    }

    @PostMapping
    public ResponseEntity postQuestion(@RequestBody QuestionDto.PostDto requestBody) {
        Question createQuestion = questionService.createQuestion(mapper.postDtoToQuestion(requestBody));
        QuestionDto.ResponseDto response = mapper.questionToResponseDto(createQuestion);

        URI location = UriCreator.createUri(QUESTION_DEFAULT_URL, createQuestion.getQuestionId());

        return ResponseEntity.created(location).body(response);
    }

    @GetMapping("/{question-id}")
    public ResponseEntity getQuestion(@PathVariable("question-id") Long questionId,
                                      HttpServletRequest servletRequest,
                                      HttpServletResponse servletResponse) {
        Question findQuestion = questionService.findQuestion(questionId);
        QuestionDto.ResponseDto response = mapper.questionToResponseDto(findQuestion);

        questionService.viewCountValidation(findQuestion, servletRequest, servletResponse);

        return new ResponseEntity(response, HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity getQuestions(@RequestParam("page") int page,
                                       @RequestParam("size") int size) {
        Page<Question> questionPage = questionService.findQuestions(page - 1, size);
        List<Question> questions = questionPage.getContent();

        return new ResponseEntity(
                new MultiResponseDto<>(mapper.questionsToResponseDtos(questions), questionPage),
                HttpStatus.OK
        );
    }

    @GetMapping("/tagged/{tag-name}")
    public ResponseEntity getQuestionsByTag(@PathVariable("tag-name") String tagName) {
        Tag tag = tagService.findTag(tagName);
        List<Question> questions = mapper.tagToQuestions(tag);
        List<QuestionDto.ResponseDto> response = mapper.questionsToResponseDtos(questions);

        return new ResponseEntity<>(
                new SingleResponse<>(response), HttpStatus.OK);
    }

    @PatchMapping("/{question-id}")
    public ResponseEntity patchQuestion(@PathVariable("question-id") Long questionId,
                                        @RequestBody QuestionDto.PatchDto requestBody) {
        requestBody.setQuestionId(questionId);
        Question updateQuestion = questionService.updateQuestion(mapper.patchDtoToQuestion(requestBody));
        QuestionDto.ResponseDto response = mapper.questionToResponseDto(updateQuestion);

        URI location = UriCreator.createUri(QUESTION_DEFAULT_URL, updateQuestion.getQuestionId());

        return ResponseEntity.status(HttpStatus.OK)
                .location(location)
                .body(response);
    }

    @DeleteMapping("/{question-id}")
    public ResponseEntity deleteQuestion(@PathVariable("question-id") Long questionId) {
        // todo: jwt 에서 memberId 파싱

        questionService.deleteQuestion(questionId);

        return ResponseEntity.noContent().build();
    }
}