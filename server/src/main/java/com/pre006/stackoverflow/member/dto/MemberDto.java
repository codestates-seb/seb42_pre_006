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
<<<<<<< HEAD
        @Pattern(regexp = "^[a-zA-Z0-9+.-]+@[a-zA-Z0-9.-]+$")
=======
        @Pattern(regexp = "^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$")
>>>>>>> e2b88ac0eb63365d4354a19408517ec912ea0a0a
        private String email;
        @NonNull
        private String password;
        @NonNull
<<<<<<< HEAD
        @Pattern(regexp = "^[a-zA-Z0-9가-힣+.-]+$") //영문 숫자 한글
        private String displayName;
    }
    @Getter
    @Setter
=======
        @Pattern(regexp = "^[a-zA-Z0-9가-힣+_.-]+$") //영문 숫자 한글
        private String displayName;
    }
    @Getter
>>>>>>> e2b88ac0eb63365d4354a19408517ec912ea0a0a
    @ToString
    @Builder
    public static class Patch{
        @Pattern(regexp = "^[a-zA-Z0-9가-힣+_.-]+$")
        private String displayName;

        private String location;
        private String MemberTitle;
        private String aboutMe;
<<<<<<< HEAD
        private Long memberId;
=======
>>>>>>> e2b88ac0eb63365d4354a19408517ec912ea0a0a
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
<<<<<<< HEAD
}
=======
}
>>>>>>> e2b88ac0eb63365d4354a19408517ec912ea0a0a
