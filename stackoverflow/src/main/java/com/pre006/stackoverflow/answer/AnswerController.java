package com.pre006.stackoverflow.answer;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
public class AnswerController {

    @PostMapping("/")
    public ResponseEntity postAnswer(@RequestBody AnswerDto.Post post){

        return new  ResponseEntity<>(HttpStatus.OK);
    }

    @PatchMapping("/{answer_id}")
    public ResponseEntity patchAnswer(@PathVariable("answer_id") long answerId,
                                      @RequestBody AnswerDto.Patch patch){

        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping("/{answer_id}")
    public ResponseEntity getAnswer(@PathVariable("answer_id") long answerId){

        return new ResponseEntity<>(HttpStatus.OK);
    }

    @DeleteMapping("/{answer_id}")
    public ResponseEntity deleteAnswer(@PathVariable("answer_id") long answerId){

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

}
