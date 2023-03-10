package com.pre006.stackoverflow.member.entitiy;

import com.pre006.stackoverflow.answer.entity.Answer;
import com.pre006.stackoverflow.answervote.entity.AnswerVote;
import com.pre006.stackoverflow.question.entity.Question;
import com.pre006.stackoverflow.questionvote.entity.QuestionVote;
import lombok.*;
import org.hibernate.annotations.ColumnDefault;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class Member {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "member_id")
    private Long memberId;

    @Column(nullable = false, updatable = false, unique = true, length = 100)
    private String email;

    @Column(nullable = false, length = 100)
    private String password;

    @Column(nullable = false, length = 20)
    private String displayName;

    @Column(length = 50)
    @ColumnDefault("''")
    private String location;

    @Column(length = 30)
    @ColumnDefault("''")
    private String memberTitle;

    @Lob
    private String aboutMe;

    @Enumerated(value = EnumType.STRING)
    @Column(length = 20)
    private MemberStatus memberStatus = MemberStatus.MEMBER_ACTIVE;

    @ElementCollection(fetch =  FetchType.EAGER)
    private List<String> roles;

    public enum MemberStatus {
        MEMBER_ACTIVE("활동중"),
        MEMBER_SLEEP("휴면 상태"),
        MEMBER_QUIT("탈퇴 상태");

        @Getter
        private String status;

        MemberStatus(String status) {
            this.status = status;
        }
    }
    public enum MemberRole {
        ROLE_USER,
        ROLE_ADMIN
    }

    @OneToMany(mappedBy = "member")
    private List<Question> questions = new ArrayList<>();

    @OneToMany(mappedBy = "member")
    private List<QuestionVote> questionVotes = new ArrayList<>();

    @OneToMany(mappedBy = "member")
    private List<Answer> answers = new ArrayList<>();

    @OneToMany(mappedBy = "member")
    private List<AnswerVote> answerVotes = new ArrayList<>();

}
