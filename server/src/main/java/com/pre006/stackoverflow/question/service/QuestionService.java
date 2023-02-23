package com.pre006.stackoverflow.question.service;

import com.pre006.stackoverflow.question.entity.Question;
import com.pre006.stackoverflow.question.repository.QuestionRepository;
import com.pre006.stackoverflow.tag.entity.QuestionTag;
import com.pre006.stackoverflow.tag.entity.Tag;
import com.pre006.stackoverflow.tag.service.TagService;
import lombok.extern.slf4j.Slf4j;
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
import java.util.Optional;
import java.util.stream.Collectors;

@Slf4j
@Transactional
@Service
public class QuestionService {
    private final QuestionRepository questionRepository;
    private final TagService tagService;

    public QuestionService(QuestionRepository questionRepository, TagService tagService) {
        this.questionRepository = questionRepository;
        this.tagService = tagService;
    }

    public Question createQuestion(Question question) {
        // todo: 저장하기 전 검증할 내용 없는지 확인

        List<Tag> tags = question.getTags();
        if (tags != null) {
            List<QuestionTag> questionTags = getQuestionTags(question, tags);
            question.setQuestionTags(questionTags);
        }

        return questionRepository.save(question);
    }

    public Question findQuestion(long questionId) {
        Question question = findVerifiedQuestion(questionId);

        // todo: 조회한 질문의 상태가 '질문 삭제'인 경우 예외 처리

        return question;
    }

    public Page<Question> findQuestions(int page, int size) {
        Pageable pageable = PageRequest.of(page, size, Sort.by("questionId").descending());

        // todo: 삭제된 질문 filter 처리

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

    public void deleteQuestion(long questionId) {
        // todo: 삭제를 요청한 유저가 작성자인지 확인

        Question deleteQuestion = findVerifiedQuestion(questionId);

        questionRepository.delete(deleteQuestion);
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

    public Question findVerifiedQuestion(long questionId) {
        Optional<Question> optionalQuestion = questionRepository.findById(questionId);

        // todo : Custom ErrorResponse 필요
        Question findQuestion = optionalQuestion.orElseThrow(() ->
                new RuntimeException("NOT_EXIST_QUESTION"));

        return findQuestion;
    }

    private List<QuestionTag> getQuestionTags(Question question, List<Tag> tags) {
        // 해당 tag가 존재하는지 확인
        List<QuestionTag> questionTags = tags.stream()
                .map(tag -> {
                    Tag findTag = tagService.getQuestionTagsValidation(tag.getTagName());
                    QuestionTag questionTag = new QuestionTag();
                    if (findTag != null) {
                        // 태그가 존재하는 경우
                        questionTag.setTag(findTag);
                    } else {
                        // 태그가 존재하지 않는 경우
                        Tag createdTag = tagService.createTag(tag);
                        questionTag.setTag(createdTag);
                    }
                    questionTag.setQuestion(question);
                    return questionTag;
                }).collect(Collectors.toList());

        return questionTags;
    }
}