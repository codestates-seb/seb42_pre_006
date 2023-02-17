package com.pre006.stackoverflow.answervote.controller;

import com.pre006.stackoverflow.answervote.dto.AnswerVoteDto;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@RequestMapping("/answer/{answer-id}/answer-vote")
public class AnswerVoteController {
    private final static String ANSWER_VOTE_DEFAULT_URL = "/answer/{answer-id}/answer-vote";

    @PostMapping
    public ResponseEntity postAnswerVote(@RequestBody AnswerVoteDto.Post post){

        return new  ResponseEntity<>(HttpStatus.CREATED);
    }
    @PatchMapping
    public ResponseEntity patchAnswerVote(@RequestBody AnswerVoteDto.Patch patch){

        return new ResponseEntity<>(HttpStatus.OK);
    }

    @DeleteMapping
    public ResponseEntity deleteAnswerVote(){

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
