package com.pre006.stackoverflow.question.service;

import com.pre006.stackoverflow.member.service.MemberService;
import com.pre006.stackoverflow.question.entity.Question;
import com.pre006.stackoverflow.question.repository.QuestionRepository;
import com.pre006.stackoverflow.tag.entity.QuestionTag;
import com.pre006.stackoverflow.tag.entity.Tag;
import com.pre006.stackoverflow.tag.service.TagService;
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

@Transactional
@Service
public class QuestionService {
    private final QuestionRepository questionRepository;
    private final TagService tagService;
    private final MemberService memberService;

    public QuestionService(QuestionRepository questionRepository, TagService tagService,
                           MemberService memberService) {
        this.questionRepository = questionRepository;
        this.tagService = tagService;
        this.memberService = memberService;
    }

    public Question createQuestion(Question question, long memberId) {
        // 존재하는 회원인지 확인
        memberService.findVerifiedMember(memberId);

        // 유저가 질문을 등록할 때, 태그도 같이 등록하는 경우
        List<Tag> tags = question.getTags();
        if (tags != null) {
            List<QuestionTag> questionTags = getQuestionTags(question, tags);
            question.setQuestionTags(questionTags);
        }

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
    public Question updateQuestion(Question question, long memberId) {
        // 수정을 요청한 유저가 작성자인지 확인
        if (question.getMember().getMemberId() != memberId)
            throw new RuntimeException("ACCESS_DENIED");        // 403

        Question findQuestion = findVerifiedQuestion(question.getQuestionId());

        Optional.ofNullable(question.getQuestionTitle())
                .ifPresent(title -> findQuestion.setQuestionTitle(title));
        Optional.ofNullable(question.getQuestionContent())
                .ifPresent(content -> findQuestion.setQuestionContent(content));
        Optional.ofNullable(question.getEditComment())
                .ifPresent(editComment -> findQuestion.setEditComment(editComment));

        return questionRepository.save(findQuestion);
    }

    public void deleteQuestion(long questionId, long memberId) {
        Question deleteQuestion = findVerifiedQuestion(questionId);

        // 삭제를 요청한 유저가 작성자인지 확인
        if (deleteQuestion.getMember().getMemberId() != memberId)
            throw new RuntimeException("ACCESS_DENIED");        // 403

        questionRepository.delete(deleteQuestion);
    }
    public void viewCountValidation(Question question,
                                    HttpServletRequest servletRequest, HttpServletResponse servletResponse) {
        long id = question.getQuestionId();

        Cookie cookie = null;
        if (servletRequest.getCookies() != null) {
            cookie = Arrays.stream(servletRequest.getCookies())
                    .filter(c -> c.getName().equals("postView"))
                    .findFirst()
                    .map(c -> {
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

        Question findQuestion = optionalQuestion.orElseThrow(() ->
                new RuntimeException("NOT_FOUND_QUESTION"));        // 404

        return findQuestion;
    }

    private List<QuestionTag> getQuestionTags(Question question, List<Tag> tags) {
        // 유저가 질문을 등록할 때, 입력한 태그가 존재하는지 확인
        List<QuestionTag> questionTags = tags.stream()
                .map(tag -> {
                    Tag findTag = tagService.getQuestionTagsValidation(tag.getTagName());
                    QuestionTag questionTag = new QuestionTag();
                    if (findTag != null) {
                        // 태그가 존재하는 경우
                        questionTag.setTag(findTag);
                    } else {
                        // 태그가 존재하지 않는 경우, 태그를 생성한 후 질문과 같이 등록한다
                        Tag createdTag = tagService.createTag(tag);
                        questionTag.setTag(createdTag);
                    }
                    questionTag.setQuestion(question);
                    return questionTag;
                }).collect(Collectors.toList());

        return questionTags;
    }
}