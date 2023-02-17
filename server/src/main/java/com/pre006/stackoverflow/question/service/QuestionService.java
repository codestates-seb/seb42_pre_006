package com.pre006.stackoverflow.question.service;

import com.pre006.stackoverflow.question.entity.Question;
import com.pre006.stackoverflow.question.repository.QuestionRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Transactional
@Service
public class QuestionService {
    private final QuestionRepository questionRepository;

    public QuestionService(QuestionRepository questionRepository) {
        this.questionRepository = questionRepository;
    }

    public Question createQuestion(Question question) {
        // todo: 저장하기 전 검증할 내용 없는지 확인
        return questionRepository.save(question);
    }

    public Question findQuestion(long questionId) {
        Question question = findVerifiedQuestion(questionId);

        return question;
    }

    public Page<Question> findQuestions(int page, int size) {
        Pageable pageable = PageRequest.of(page, size, Sort.by("questionId").descending());
        return questionRepository.findAll(pageable);
    }

    public Question updateQuestion(Question question) {
        // todo: 수정 시 검증을 해야하는 부분이 있는지      ex) 내용이 완전히 같을 경우 ERROR
        // todo: 질문 상태 수정을 해당 로직에서 처리할건지

        Question findQuestion = findVerifiedQuestion(question.getQuestionId());

        Optional.ofNullable(question.getQuestionTitle())
                .ifPresent(title -> findQuestion.setQuestionTitle(title));
        Optional.ofNullable(question.getQuestionContent())
                .ifPresent(content -> findQuestion.setQuestionContent(content));
        Optional.ofNullable(question.getEditComment())
                .ifPresent(editComment -> findQuestion.setEditComment(editComment));

        return questionRepository.save(findQuestion);
    }

    private Question findVerifiedQuestion(long questionId) {
        Optional<Question> optionalQuestion = questionRepository.findById(questionId);

        Question findQuestion = optionalQuestion.orElseThrow(() ->
                new NullPointerException());

        return findQuestion;
    }
}
