package com.pre006.stackoverflow.questionvote.controller;

import com.pre006.stackoverflow.question.utils.UriCreator;
import com.pre006.stackoverflow.questionvote.dto.QuestionVoteDto;
import com.pre006.stackoverflow.questionvote.entity.QuestionVote;
import com.pre006.stackoverflow.questionvote.mapper.QuestionVoteMapper;
import com.pre006.stackoverflow.questionvote.service.QuestionVoteService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;

@RestController
@CrossOrigin
@RequestMapping("/questions")
public class QuestionVoteController {
    private final String DEFAULT_URL = "/questions";
    private final QuestionVoteService questionVoteService;
    private final QuestionVoteMapper mapper;

    public QuestionVoteController(QuestionVoteService questionVoteService, QuestionVoteMapper mapper) {
        this.questionVoteService = questionVoteService;
        this.mapper = mapper;
    }

    @PostMapping("/{question-id}/vote")
    public ResponseEntity postQuestion(@PathVariable("question-id") Long questionId,
                                       @RequestBody QuestionVoteDto.PostDto requestBody) {
        requestBody.setQuestionId(questionId);
        QuestionVote questionVote = questionVoteService.createVote(
                mapper.postDtoToQuestionVote(requestBody));

        long id = questionVote.getQuestionVoteId();
        URI location = UriCreator.createUri(DEFAULT_URL, questionId, id);

        QuestionVoteDto.ResponseDto response = mapper.questionVoteToResponseDto(questionVote);

        return ResponseEntity.created(location).body(response);
    }

    @DeleteMapping("/{question-vote-id}/vote")
    public ResponseEntity deleteQuestionVote(@PathVariable("question-vote-id") Long questionVoteId) {
        // todo: JWT 에서 memberId 파싱

        questionVoteService.deleteVote(questionVoteId);

        // todo: 삭제된 투표 상태에 따라 questionVoteCount 가감하는 로직 필요

        return ResponseEntity.noContent().build();
    }
}
