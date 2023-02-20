package com.pre006.stackoverflow.questionvote.service;

import com.pre006.stackoverflow.question.entity.Question;
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
        Question question = questionService.findVerifiedQuestion(questionId);

        // 검증 3. 해당 질문에 투표한 내용이 존재하는지 확인 -> 존재한다면 Exception 발생
        // todo: 회원 ID 추가
        Optional<QuestionVote> optionalQuestionVote =
                questionVoteRepository.findByQuestionIdAndMemberId(questionId);
        if (optionalQuestionVote.isPresent())
            throw new RuntimeException("ALREADY_EXIST_VOTE");

        // todo: 만약 투표를 바꾸고 싶은 경우
        // todo: 1. 바로 다른 상태값으로 바꾼다       2. 먼저 취소 후 다른 상태값으로 바꿔야 한다
        if (questionVote.getQuestionVoteStatus()) {
            question.addVoteCount();
        } else {
            question.subVoteCount();
        }

        return questionVoteRepository.save(questionVote);
    }
}
