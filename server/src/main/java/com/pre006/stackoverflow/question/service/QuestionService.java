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

    private Question findVerifiedQuestion(long questionId) {
        Optional<Question> optionalQuestion = questionRepository.findById(questionId);

        Question findQuestion = optionalQuestion.orElseThrow(() ->
                new NullPointerException());

        return findQuestion;
    }
}
