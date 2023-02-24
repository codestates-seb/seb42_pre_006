package com.pre006.stackoverflow.answervote.service;

import com.pre006.stackoverflow.answer.excpetion.BusinessLogicException;
import com.pre006.stackoverflow.answer.excpetion.ExceptionCode;
import com.pre006.stackoverflow.answervote.entity.AnswerVote;
import com.pre006.stackoverflow.answervote.repository.AnswerVoteRepository;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class AnswerVoteService {
    private final AnswerVoteRepository answerVoteRepository;

    public AnswerVoteService(AnswerVoteRepository answerVoteRepository) {

        this.answerVoteRepository = answerVoteRepository;
    }

    public AnswerVote createAnswerVote(AnswerVote answerVote){
        answerVote.isAnswerVoteStatus();
        return answerVoteRepository.save(answerVote);
    }

    public AnswerVote updateAnswerVote(AnswerVote answerVote){
        AnswerVote findAnswerVote = findVerifiedAnswerVote(answerVote.getAnswerVoteId());

        Optional.ofNullable(answerVote.isAnswerVoteStatus()).isPresent();

        return answerVoteRepository.save(findAnswerVote);
    }

    public void deleteAnswerVote(long answerVoteId){
        AnswerVote findAnswerVote = findVerifiedAnswerVote(answerVoteId);
        answerVoteRepository.delete(findAnswerVote);
    }

    public AnswerVote findVerifiedAnswerVote(long answerVoteId){
        Optional<AnswerVote> optionalAnswerVote = answerVoteRepository.findById(answerVoteId);
        AnswerVote findAnswerVote = optionalAnswerVote.orElseThrow(() ->new BusinessLogicException(ExceptionCode.NOT_FOUND));
        return findAnswerVote;
    }
}
