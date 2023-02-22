package com.pre006.stackoverflow.tag.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.validation.constraints.Pattern;

public class TagDto {
    @Getter
    @NoArgsConstructor
    public static class PostDto {
        @Pattern(regexp = "^(?=.*[a-z])[a-z\\d-]{1,20}$",
                message = "태그 이름은 영소문자 10자 이하여야 합니다. (특수문자는 '-'만 허용)")
        private String tagName;

        // todo: questionTag 구현 후 추가
    }

    @AllArgsConstructor
    @Getter
    @Setter
    public static class ResponseDto {
        private long tagId;
        private String tagName;

    }
}
