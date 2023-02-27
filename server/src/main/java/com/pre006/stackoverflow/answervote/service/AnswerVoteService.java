package com.pre006.stackoverflow.answervote.service;

import com.pre006.stackoverflow.answer.excpetion.BusinessLogicException;
import com.pre006.stackoverflow.answer.excpetion.ExceptionCode;
import com.pre006.stackoverflow.answer.service.AnswerService;
import com.pre006.stackoverflow.answervote.entity.AnswerVote;
import com.pre006.stackoverflow.answervote.repository.AnswerVoteRepository;
import com.pre006.stackoverflow.questionvote.entity.QuestionVote;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class AnswerVoteService {
    private final AnswerVoteRepository answerVoteRepository;
    private final AnswerService answerService;

    public AnswerVoteService(AnswerVoteRepository answerVoteRepository, AnswerService answerService) {
        this.answerVoteRepository = answerVoteRepository;
        this.answerService = answerService;
    }

    public AnswerVote createAnswerVote(AnswerVote answerVote){

        long answerId = answerVote.getAnswer().getAnswerId();
        answerService.findVerifiedAnswer(answerId);

        Optional<AnswerVote> optionalAnswerVote =
                answerVoteRepository.findById(answerId);
        if (optionalAnswerVote.isPresent()) {
            AnswerVote answerVote1 = optionalAnswerVote.get();
            if (answerVote1.getAnswerVoteStatus() == answerVote.getAnswerVoteStatus()) {
                deleteAnswerVote(answerVote1.getAnswerVoteId());
                return null;
            } else {
                throw new RuntimeException("ALREADY_EXIST_VOTE");
            }
        }
        return answerVoteRepository.save(answerVote);
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
