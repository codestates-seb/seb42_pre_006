package com.pre006.stackoverflow.question.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.ColumnDefault;
import org.hibernate.annotations.DynamicInsert;

import javax.persistence.*;

@NoArgsConstructor
@Getter
@Setter
@Entity
public class Question {
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
    private int questionHits;

    @Column(nullable = false)
    private int questionVoteCount;

    private String editComment;

    // todo: Member 연관 관계 매핑

    // todo: Tag 연관 관계 매핑

    // todo: QuestionVote 연관 관계 매핑


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
