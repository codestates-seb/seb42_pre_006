package com.pre006.stackoverflow.question.entity;

<<<<<<< HEAD
import com.pre006.stackoverflow.question.audit.Auditable;
import com.pre006.stackoverflow.questionvote.entity.QuestionVote;
=======
>>>>>>> e2b88ac0eb63365d4354a19408517ec912ea0a0a
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.ColumnDefault;
import org.hibernate.annotations.DynamicInsert;

import javax.persistence.*;
<<<<<<< HEAD
import java.util.ArrayList;
import java.util.List;
=======
>>>>>>> e2b88ac0eb63365d4354a19408517ec912ea0a0a

@NoArgsConstructor
@Getter
@Setter
@Entity
<<<<<<< HEAD
public class Question extends Auditable {
=======
public class Question {
>>>>>>> e2b88ac0eb63365d4354a19408517ec912ea0a0a
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
<<<<<<< HEAD
    private int viewCount;
=======
    private int questionHits;
>>>>>>> e2b88ac0eb63365d4354a19408517ec912ea0a0a

    @Column(nullable = false)
    private int questionVoteCount;

    private String editComment;

    // todo: Member 연관 관계 매핑

    // todo: Tag 연관 관계 매핑

    // todo: QuestionVote 연관 관계 매핑
<<<<<<< HEAD
    @OneToMany(mappedBy = "question")
    private List<QuestionVote> questionVotes = new ArrayList<>();

    public void addViewCount() {
        this.viewCount++;
    }

    public void addVoteCount() {
        this.questionVoteCount++;
    }

    public void subVoteCount() {
        this.questionVoteCount--;
    }

    public void setQuestionVote(QuestionVote questionVote) {
        this.questionVotes.add(questionVote);
        if (questionVote.getQuestion() != this) {
            questionVote.setQuestion(this);
        }
    }
=======

>>>>>>> e2b88ac0eb63365d4354a19408517ec912ea0a0a

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
