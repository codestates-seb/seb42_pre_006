package com.pre006.stackoverflow.answervote.entity;

import com.pre006.stackoverflow.answer.entity.Answer;
import com.pre006.stackoverflow.global.audit.Auditable;
import com.pre006.stackoverflow.member.entitiy.Member;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Getter
@Setter
@NoArgsConstructor
@Table(name = "ANSWER_VOTE")
public class AnswerVote extends Auditable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long answerVoteId;
    @Column(nullable = false)
    private Boolean answerVoteStatus;

    @ManyToOne
    @JoinColumn(name = "ANSWER_ID")
    private Answer answer;

    @ManyToOne
    @JoinColumn(name = "MEMBER_ID")
    private Member member;
}
