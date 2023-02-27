package com.pre006.stackoverflow.question.entity;

import com.pre006.stackoverflow.answer.entity.Answer;
import com.pre006.stackoverflow.member.entitiy.Member;
import com.pre006.stackoverflow.question.audit.QuestionAuditable;
import com.pre006.stackoverflow.questionvote.entity.QuestionVote;

import com.pre006.stackoverflow.tag.entity.QuestionTag;
import com.pre006.stackoverflow.tag.entity.Tag;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@NoArgsConstructor
@Getter
@Setter
@Entity
public class Question extends QuestionAuditable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long questionId;

    @Column(nullable = false)
    private String questionTitle;
    @Column(columnDefinition = "TEXT", nullable = false)
    private String questionContent;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private QuestionStatus questionStatus = QuestionStatus.QUESTION_REGISTRATION;

    @Column(nullable = false)
    private int viewCount;

    @Column(nullable = false)
    private int questionVoteCount;

    private String editComment;

    @Column(nullable = false)
    private LocalDateTime modifiedAt = LocalDateTime.now();

    @OneToMany(mappedBy = "question")
    private List<QuestionVote> questionVotes = new ArrayList<>();

    @ManyToOne
    @JoinColumn(name = "MEMBER_ID")
    private Member member;

    @OneToMany(mappedBy = "question")
    private List<Answer> answers = new ArrayList<>();

    @OneToMany(mappedBy = "question", cascade = {CascadeType.PERSIST, CascadeType.REMOVE})
    private List<QuestionTag> questionTags = new ArrayList<>();

    @Transient
    private List<Tag> tags = new ArrayList<>();

    @Transient
    private int answersCount;

    public int getAnswersCount() {
        answersCount = answers.size();
        return answersCount;
    }

    public int getQuestionVoteCount() {
        questionVoteCount = questionVotes.stream()
                .mapToInt(questionVote -> questionVote.getQuestionVoteStatus() ? 1 : -1)
                .sum();
        return questionVoteCount;
    }

    public void setAnswer(Answer answer) {
        this.answers.add(answer);
        if (answer.getQuestion() != this) {
            answer.setQuestion(this);
        }
    }

    public void setMember(Member member){
        this.member = member;
        if (!this.member.getQuestions().contains(this)) {
            this.member.getQuestions().add(this);
        }
    }

    public void setQuestionVote(QuestionVote questionVote) {
        this.questionVotes.add(questionVote);
        if (questionVote.getQuestion() != this) {
            questionVote.setQuestion(this);
        }
    }

    public void addViewCount() {
        this.viewCount++;
    }

    public Question(String questionTitle, String questionContent) {
        this.questionTitle = questionTitle;
        this.questionContent = questionContent;
    }

    public enum QuestionStatus {
        QUESTION_REGISTRATION("질문 등록"),
        QUESTION_ANSWERED("답변 완료"),
        QUESTION_ACCEPTED("답변 채택"),
        QUESTION_DELETE("질문 삭제");

        @Getter
        public String status;

        QuestionStatus(String status) {
            this.status = status;
        }
    }
}
