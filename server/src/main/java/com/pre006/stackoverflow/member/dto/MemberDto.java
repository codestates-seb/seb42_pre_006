package com.pre006.stackoverflow.member.dto;

import lombok.*;

import javax.validation.constraints.Pattern;


@Getter
@Setter
@ToString
public class MemberDto {

    @AllArgsConstructor
    @Getter
    @Setter
    @ToString
    @Builder
    public static class Post{
        @NonNull
        @Pattern(regexp = "^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$")
        private String email;
        @NonNull
        private String password;
        @NonNull
        @Pattern(regexp = "^[a-zA-Z0-9가-힣+_.-]+$") //영문 숫자 한글
        private String displayName;
    }
    @Getter
    @ToString
    @Builder
    public static class Patch{
        @Pattern(regexp = "^[a-zA-Z0-9가-힣+_.-]+$")
        private String displayName;

        private String location;
        private String MemberTitle;
        private String aboutMe;
    }
    public static class Response {
        private Long memberId;
        private String email;
        private String displayName;
        private String location;
        private String memberTitle;
        private String aboutMe;
    }
}
