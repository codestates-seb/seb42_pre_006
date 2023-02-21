package com.pre006.stackoverflow.question.entity;

import com.pre006.stackoverflow.answer.entity.Answer;
import com.pre006.stackoverflow.member.entitiy.Member;
import com.pre006.stackoverflow.question.audit.Auditable;
import com.pre006.stackoverflow.questionvote.entity.QuestionVote;
import com.pre006.stackoverflow.question.audit.Auditable;
import com.pre006.stackoverflow.questionvote.entity.QuestionVote;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.ColumnDefault;
import org.hibernate.annotations.DynamicInsert;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;
import java.util.ArrayList;
import java.util.List;

@NoArgsConstructor
@Getter
@Setter
@Entity
public class Question extends Auditable {
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

    // todo: Member 연관 관계 매핑

    // todo: Tag 연관 관계 매핑

    // todo: QuestionVote 연관 관계 매핑
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
    @ManyToOne
    @JoinColumn(name = "MEMBER_ID")
    private Member member;

    public void addMember(Member member){
        this.member = member;
    }

    @OneToMany(mappedBy = "question")
    private List<Answer> answers = new ArrayList<>();
}
