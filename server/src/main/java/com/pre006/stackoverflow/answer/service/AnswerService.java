package com.pre006.stackoverflow.answer.service;

import com.pre006.stackoverflow.answer.entity.Answer;
import com.pre006.stackoverflow.answer.excpetion.BusinessLogicException;
import com.pre006.stackoverflow.answer.excpetion.ExceptionCode;
import com.pre006.stackoverflow.answer.repositorty.AnswerRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AnswerService {
    private final AnswerRepository answerRepository;

    public AnswerService(AnswerRepository answerRepository) {
        this.answerRepository = answerRepository;
    }

    public Answer createAnswer(Answer answer){
        return answerRepository.save(answer);
    }

    public Answer updateAnswer(Answer answer){
        Answer findAnswer = findVerifiedAnswer(answer.getAnswerId());

        Optional.ofNullable(answer.getAnswerContent()).ifPresent(content -> findAnswer.setAnswerContent(content));
        return answerRepository.save(findAnswer);
    }

    public Answer findAnswer(long answerId){

        return findVerifiedAnswer(answerId);
    }

    public List<Answer> findAnswers(){

        return answerRepository.findAll();
    }

    public void deleteAnswer(long answerId){
        Answer findAnswer = findVerifiedAnswer(answerId);
        answerRepository.delete(findAnswer);

    }

    public Answer findVerifiedAnswer(long answerId){
        Optional<Answer> optionalAnswer = answerRepository.findById(answerId);
        Answer findAnswer = optionalAnswer.orElseThrow(() -> new BusinessLogicException(ExceptionCode.ANSWER_NOT_FOUND));
        return findAnswer;
    }
}
