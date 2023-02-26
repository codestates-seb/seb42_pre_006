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
        @Pattern(regexp = "^[a-zA-Z0-9+.-]+@[a-zA-Z0-9.-]+$")
        private String email;
        @NonNull
        @Pattern(regexp = "^(?=.*[A-Za-z])(?=.*\\d)(?=.*[~!@#$%^&*()+|=])[A-Za-z\\d~!@#$%^&*()+|=]{8,}$") //영어, 숫자, 특수 1개 필수, 8글자
        private String password;
        @NonNull
        @Pattern(regexp = "^[a-zA-Z0-9가-힣+_-]{6,}$") //한글 영어 숫자 특수-,_, 6글자
        private String displayName;
    }

    @Getter
    @Setter
    @ToString
    @Builder
    public static class Patch{
        @Pattern(regexp = "^[a-zA-Z0-9가-힣+_-]{6,}$")
        private String displayName;

        private String location;
        private String memberTitle;
        private String aboutMe;
        private Long memberId;
    }
    @Getter
    @Setter
    @NoArgsConstructor
    @AllArgsConstructor
    @Builder
    public static class Response {
        private Long memberId;
        private String email;
        private String displayName;
        private String location;
        private String memberTitle;
        private String aboutMe;
    }
}