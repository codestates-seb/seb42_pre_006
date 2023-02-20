package com.pre006.stackoverflow.questionvote.service;

import com.pre006.stackoverflow.question.service.QuestionService;
import com.pre006.stackoverflow.questionvote.entity.QuestionVote;
import com.pre006.stackoverflow.questionvote.repository.QuestionVoteRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

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

        // 검증 3. 해당 질문에 투표한 내용이 존재하는지 확인 -> 존재한다면 Exception 발생
        // todo: 회원 ID 추가
        Optional<QuestionVote> optionalQuestionVote =
                questionVoteRepository.findByQuestionIdAndMemberId(questionId);
        if (optionalQuestionVote.isPresent())
            throw new RuntimeException("ALREADY_EXIST_VOTE");

        // Question entity에 up/down 반영하는 로직

        return questionVoteRepository.save(questionVote);
    }
}
