package com.pre006.stackoverflow.answer.service;

import com.pre006.stackoverflow.answer.entity.Answer;
import com.pre006.stackoverflow.answer.excpetion.BusinessLogicException;
import com.pre006.stackoverflow.answer.excpetion.ExceptionCode;
import com.pre006.stackoverflow.answer.repositorty.AnswerRepository;
import com.pre006.stackoverflow.member.entitiy.Member;
import com.pre006.stackoverflow.member.service.MemberService;
import com.pre006.stackoverflow.question.entity.Question;
import com.pre006.stackoverflow.question.service.QuestionService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class AnswerService {
    private final AnswerRepository answerRepository;
    private final MemberService memberService;
    private final QuestionService questionService;

    public AnswerService(AnswerRepository answerRepository, MemberService memberService, QuestionService questionService) {
        this.answerRepository = answerRepository;
        this.memberService = memberService;
        this.questionService = questionService;
    }

    public Answer createAnswer(Answer answer){
        Question question = questionService.findVerifiedQuestion(answer.getQuestion().getQuestionId());
        //Member member = memberService.findVerifiedMember(answer.getMember().getMemberId());

        answer.setQuestion(question);
        //answer.setMember(member);
        return answerRepository.save(answer);
    }

    public Answer updateAnswer(Answer answer){
        Answer findAnswer = findVerifiedAnswer(answer.getAnswerId());

        //Member postMember = memberService.findVerifiedMember(findAnswer.getMember().getMemberId());
        //answer.setMember(postMember);
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

    public void deleteAnswers(){

        answerRepository.deleteAll();
    }

    public Answer findVerifiedAnswer(long answerId){
        Optional<Answer> optionalAnswer = answerRepository.findById(answerId);
        Answer findAnswer = optionalAnswer.orElseThrow(() -> new BusinessLogicException(ExceptionCode.NOT_FOUND));
        return findAnswer;
    }
}
