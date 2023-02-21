package com.pre006.stackoverflow.question.controller;

import com.pre006.stackoverflow.question.dto.QuestionDto;
import com.pre006.stackoverflow.question.entity.Question;
import com.pre006.stackoverflow.question.mapper.QuestionMapper;
<<<<<<< HEAD
import com.pre006.stackoverflow.question.response.MultiResponseDto;
import com.pre006.stackoverflow.question.service.QuestionService;
import com.pre006.stackoverflow.question.utils.UriCreator;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
=======
import com.pre006.stackoverflow.question.service.QuestionService;
import com.pre006.stackoverflow.question.utils.UriCreator;
import lombok.extern.slf4j.Slf4j;
>>>>>>> e2b88ac0eb63365d4354a19408517ec912ea0a0a
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

<<<<<<< HEAD
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.net.URI;
import java.util.List;
=======
import java.net.URI;
>>>>>>> e2b88ac0eb63365d4354a19408517ec912ea0a0a

@Slf4j
@RestController
@RequestMapping("/questions")
public class QuestionController {
    private final static String QUESTION_DEFAULT_URL = "/questions";

    private final QuestionService questionService;
<<<<<<< HEAD
=======

>>>>>>> e2b88ac0eb63365d4354a19408517ec912ea0a0a
    private final QuestionMapper mapper;

    public QuestionController(QuestionService questionService, QuestionMapper mapper) {
        this.questionService = questionService;
        this.mapper = mapper;
    }

    @PostMapping
    public ResponseEntity postQuestion(@RequestBody QuestionDto.PostDto requestBody) {
<<<<<<< HEAD
        Question createQuestion = questionService.createQuestion(mapper.postDtoToQuestion(requestBody));
        QuestionDto.ResponseDto response = mapper.questionToResponseDto(createQuestion);

        URI location = UriCreator.createUri(QUESTION_DEFAULT_URL, createQuestion.getQuestionId());
=======
        Question createQuestion = questionService.createQuestion(mapper.PostDtoToQuestion(requestBody));
        QuestionDto.ResponseDto response = mapper.questionToResponseDto(createQuestion);

        URI location = UriCreator.createUri(QUESTION_DEFAULT_URL);
>>>>>>> e2b88ac0eb63365d4354a19408517ec912ea0a0a

        return ResponseEntity.created(location).body(response);
    }

    @GetMapping("/{question-id}")
<<<<<<< HEAD
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
=======
    public ResponseEntity getQuestion(@PathVariable("question-id") Long questionId) {
        Question findQuestion = questionService.findQuestion(questionId);
        QuestionDto.ResponseDto response = mapper.questionToResponseDto(findQuestion);

        URI location = UriCreator.createUri(QUESTION_DEFAULT_URL, questionId);

        return ResponseEntity.created(location).body(response);
    }

>>>>>>> e2b88ac0eb63365d4354a19408517ec912ea0a0a
}
