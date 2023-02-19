package com.pre006.stackoverflow.questionvote.entity;

import com.pre006.stackoverflow.question.audit.Auditable;
import com.pre006.stackoverflow.question.entity.Question;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@NoArgsConstructor
@Getter
@Setter
@Entity
public class QuestionVote extends Auditable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long questionVoteId;

    @Column(nullable = false)
    private Boolean questionStatus;

    @ManyToOne
    @JoinColumn(name = "question_id")
    private Question question;

    // todo: Member 연관 관계 매핑

    public void setQuestion(Question question) {
        this.question = question;
        if (!this.question.getQuestionVotes().contains(this)) {
            this.question.getQuestionVotes().add(this);
        }
    }
}
