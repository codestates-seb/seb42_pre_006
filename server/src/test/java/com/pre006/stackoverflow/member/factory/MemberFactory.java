package com.pre006.stackoverflow.member.factory;

import com.pre006.stackoverflow.member.dto.MemberDto;
import com.pre006.stackoverflow.member.entitiy.Member;
import org.springframework.security.crypto.password.PasswordEncoder;

public class MemberFactory {
    public static MemberDto.Post createMemberPostDto() {

        return MemberDto.Post.builder()
                .email("email@test.com")
                .password("password")
                .displayName("displayName")
                .build();
    }

    public static Member createMember(PasswordEncoder passwordEncoder) {
        return Member.builder()
                .email("test1@gmail.com")
                .memberStatus(Member.MemberStatus.MEMBER_ACTIVE)
                .password(passwordEncoder.encode("password"))
                .displayName("displayName")
                .aboutMe("aboutMe")
                .memberTitle("memberTitle")
                .location("location")
                .build();
    }

    public static Member createMember() {
        return Member.builder()
                .email("test1@gmail.com")
                .memberStatus(Member.MemberStatus.MEMBER_ACTIVE)
                .displayName("displayName")
                .aboutMe("aboutMe")
                .memberTitle("memberTitle")
                .location("location")
                .build();
    }

    public static MemberDto.Response createMemberResponseDto() {
        return MemberDto.Response.builder()
                .memberId(1L)
                .email("test1@gmail.com")
                .displayName("displayName")
                .aboutMe("aboutMe")
                .memberTitle("memberTitle")
                .location("location")
                .build();
    }

    public static MemberDto.Patch createMemberPatchDto() {
        return MemberDto.Patch.builder()
                .displayName("displayName")
                .aboutMe("aboutMe")
                .memberTitle("memberTitle")
                .location("location")
                .build();
    }
}
