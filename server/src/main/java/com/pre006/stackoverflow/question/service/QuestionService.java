package com.pre006.stackoverflow.question.service;

import com.pre006.stackoverflow.question.entity.Question;
import com.pre006.stackoverflow.question.repository.QuestionRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.time.ZoneOffset;
import java.util.Arrays;
import java.util.List;
import java.util.Objects;
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

    public void viewCountValidation(Question question,
                           HttpServletRequest servletRequest, HttpServletResponse servletResponse) {
        long id = question.getQuestionId();

        Cookie cookie = null;
        if (servletRequest.getCookies() != null) {
            cookie = Arrays.stream(servletRequest.getCookies())
                    .filter(c -> c.getName().equals("postView"))    // postView 쿠키가 있는지 필터링
                    .findFirst()    // filter 조건에 일치하는 가장 앞에 있는 요소 1를 Optional 로 리턴. 없으면 empty 리턴
                    .map(c -> {     // Optional 에 Cookie 가 있으면 꺼내서 수정
                        if (!c.getValue().contains("[" + id + "]")) {
                            question.addViewCount();
                            c.setValue(c.getValue() + "[" + id + "]");
                        }
                        return c;
                    })
                    .orElseGet(() -> {
                        question.addViewCount();
                        return new Cookie("postView", "[" + id + "]");
                    });
        } else {
            question.addViewCount();
            cookie = new Cookie("postView", "[" + id + "]");
        }
        long todayEndSecond = LocalDate.now().atTime(LocalTime.MAX).toEpochSecond(ZoneOffset.UTC);
        long currentSecond = LocalDateTime.now().toEpochSecond(ZoneOffset.UTC);
        cookie.setPath("/");
        cookie.setMaxAge((int) (todayEndSecond - currentSecond));
        servletResponse.addCookie(cookie);
    }

    private Question findVerifiedQuestion(long questionId) {
        Optional<Question> optionalQuestion = questionRepository.findById(questionId);

        // todo : Custom ErrorResponse 필요
        Question findQuestion = optionalQuestion.orElseThrow(() ->
                new NullPointerException());

        return findQuestion;
    }
}
