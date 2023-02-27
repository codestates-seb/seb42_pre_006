package com.pre006.stackoverflow.answer.controller;

import com.pre006.stackoverflow.answer.dto.AnswerDto;
import com.pre006.stackoverflow.answer.entity.Answer;
import com.pre006.stackoverflow.answer.mapper.AnswerMapper;
import com.pre006.stackoverflow.answer.service.AnswerService;
import com.pre006.stackoverflow.answer.utils.UriCreator;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/")
public class AnswerController {
    private final static String ANSWER_DEFAULT_URL = "/";
    private final AnswerService answerService;
    private AnswerMapper mapper;

    public AnswerController(AnswerService answerService, AnswerMapper mapper) {
        this.answerService = answerService;
        this.mapper = mapper;
    }

    @PostMapping("questions/{question-id}/answers")
    public ResponseEntity postAnswer(@PathVariable("question-id") long questionId,
                                     @RequestBody AnswerDto.Post post){
        Answer answer = answerService.createAnswer(mapper.answerDtoToAnswer(questionId, post));
        URI location = UriCreator.createUri(ANSWER_DEFAULT_URL, answer.getAnswerId());

        return ResponseEntity.created(location).build();
    }

    @PatchMapping("questions/{question-id}/answers/{answer-id}")
    public ResponseEntity patchAnswer(@PathVariable("question-id") long questionId,
                                      @PathVariable("answer-id") long answerId,
                                      @RequestBody AnswerDto.Patch patch){
        patch.setAnswerId(answerId);
        Answer answer = answerService.updateAnswer(mapper.answerDtoToAnswer(questionId, patch));

        return new ResponseEntity<>(mapper.answerToAnswerResponse(answer), HttpStatus.OK);
    }

    @GetMapping("answers")
    public ResponseEntity getAnswers(){
        List<Answer> answers = answerService.findAnswers();

        return new ResponseEntity<>(mapper.answersToAnswerResponses(answers), HttpStatus.OK);
    }

    @GetMapping("answers/{answer-id}")
    public ResponseEntity getAnswer(@PathVariable("answer-id") long answerId){
        Answer answer = answerService.findAnswer(answerId);

        return new ResponseEntity<>(mapper.answerToAnswerResponse(answer), HttpStatus.OK);
    }

    @DeleteMapping("answers/{answer-id}")
    public ResponseEntity deleteAnswer(@PathVariable("answer-id") long answerId){
        answerService.deleteAnswer(answerId);
        System.out.println("삭제가 완료됐습니다.");
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @DeleteMapping
    public ResponseEntity deleteAnswers(){
        answerService.deleteAnswers();

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
