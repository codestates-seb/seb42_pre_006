package com.pre006.stackoverflow.tag.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Positive;

public class TagDto {
    @Getter
    @NoArgsConstructor
    public static class PostDto {
        @Pattern(regexp = "^(?=.*[a-z])[a-z\\d-]{1,10}$",
                message = "태그 이름은 영소문자 10자 이하여야 합니다. (특수문자는 '-'만 허용)")
        private String tagName;

        // todo: questionTag 구현 후 추가
    }

    public static class ResponseDto {
        private long tagId;
        private String tagName;

    }
}
