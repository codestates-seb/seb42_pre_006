package com.pre006.stackoverflow.questionvote.service;

import com.pre006.stackoverflow.question.service.QuestionService;
import com.pre006.stackoverflow.questionvote.entity.QuestionVote;
import com.pre006.stackoverflow.questionvote.repository.QuestionVoteRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Transactional
@Service
public class QuestionVoteService {
    private final QuestionVoteRepository questionVoteRepository;
    private final QuestionService questionService;

    public QuestionVoteService(QuestionVoteRepository questionVoteRepository,
                               QuestionService questionService) {
        this.questionVoteRepository = questionVoteRepository;
        this.questionService = questionService;
    }

    public QuestionVote createVote(QuestionVote questionVote) {
        // todo: 검증 1. 존재하는 회원인지 확인

        // 검증 2. 존재하는 질문인지 확인
        long questionId = questionVote.getQuestion().getQuestionId();
        questionService.findVerifiedQuestion(questionId);

        return questionVoteRepository.save(questionVote);
    }
}
