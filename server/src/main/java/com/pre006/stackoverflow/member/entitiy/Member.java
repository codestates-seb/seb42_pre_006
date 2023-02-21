package com.pre006.stackoverflow.member.entitiy;

import lombok.*;
import org.hibernate.annotations.ColumnDefault;

import javax.persistence.*;

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

}
