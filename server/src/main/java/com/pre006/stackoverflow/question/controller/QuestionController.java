package com.pre006.stackoverflow.question.controller;

import com.pre006.stackoverflow.question.dto.QuestionDto;
import com.pre006.stackoverflow.question.entity.Question;
import com.pre006.stackoverflow.question.mapper.QuestionMapper;
import com.pre006.stackoverflow.question.service.QuestionService;
import com.pre006.stackoverflow.question.utils.UriCreator;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;

@Slf4j
@RestController
@RequestMapping("/questions")
public class QuestionController {
    private final static String QUESTION_DEFAULT_URL = "/questions";

    private final QuestionService questionService;

    private final QuestionMapper mapper;

    public QuestionController(QuestionService questionService, QuestionMapper mapper) {
        this.questionService = questionService;
        this.mapper = mapper;
    }

    @PostMapping
    public ResponseEntity postQuestion(@RequestBody QuestionDto.PostDto requestBody) {
        Question createQuestion = questionService.createQuestion(mapper.PostDtoToQuestion(requestBody));
        QuestionDto.ResponseDto response = mapper.questionToResponseDto(createQuestion);

        URI location = UriCreator.createUri(QUESTION_DEFAULT_URL);

        return ResponseEntity.created(location).body(response);
    }

    @GetMapping("/{question-id}")
    public ResponseEntity getQuestion(@PathVariable("question-id") Long questionId) {
        Question findQuestion = questionService.findQuestion(questionId);
        QuestionDto.ResponseDto response = mapper.questionToResponseDto(findQuestion);

        URI location = UriCreator.createUri(QUESTION_DEFAULT_URL, questionId);

        return ResponseEntity.created(location).body(response);
    }

}
