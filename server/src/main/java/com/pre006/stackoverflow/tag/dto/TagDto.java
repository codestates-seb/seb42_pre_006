package com.pre006.stackoverflow.tag.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;

public class TagDto {
    @Getter
    @NoArgsConstructor
    public static class PostDto {
        @Pattern(regexp = "^(?=.*[a-z])[a-z\\d-]{1,20}$",
                message = "태그 이름은 영소문자 10자 이하여야 합니다. (특수문자는 '-'만 허용)")
        private String tagName;
    }

    @Getter
    @NoArgsConstructor
    public static class PatchDto {
        private long tagId;
        @NotBlank(message = "태그 정보를 입력해주세요")
        @Size(min = 20, max = 460, message = "태그 정보는 20자 이상 460자 이하여야 합니다.")
        private String tagInfo;

        public void setTagId(long tagId) {
            this.tagId = tagId;
        }
    }

    @AllArgsConstructor
    @NoArgsConstructor
    @Getter
    @Setter
    public static class ResponseDto {
        private long tagId;
        private String tagName;
        private String tagInfo;
        private int usageCount;
    }
}
