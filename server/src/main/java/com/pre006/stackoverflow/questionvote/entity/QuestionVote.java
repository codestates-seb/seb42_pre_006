package com.pre006.stackoverflow.questionvote.entity;

import com.pre006.stackoverflow.member.entitiy.Member;
import com.pre006.stackoverflow.global.audit.Auditable;
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
    private Boolean questionVoteStatus;

    @ManyToOne
    @JoinColumn(name = "QUESTION_ID")
    private Question question;

    @ManyToOne
    @JoinColumn(name = "MEMBER_ID")
    private Member member;

    public void setQuestion(Question question) {
        this.question = question;
        if (!this.question.getQuestionVotes().contains(this)) {
            this.question.getQuestionVotes().add(this);
        }
    }

    public void setMember(Member member){
        this.member = member;
        if (!this.member.getQuestionVotes().contains(this)) {
            this.question.getQuestionVotes().add(this);
        }
    }
}
