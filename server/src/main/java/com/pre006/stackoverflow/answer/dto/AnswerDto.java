package com.pre006.stackoverflow.answer.dto;

import lombok.*;
import org.springframework.data.annotation.CreatedDate;

import javax.validation.constraints.NotBlank;
import java.time.LocalDateTime;

public class AnswerDto {
    @Getter
    @AllArgsConstructor
    @NoArgsConstructor
    public static class Post{
        @NotBlank(message = "내용을 적어주세요.")
        private String answerContent;
    }
    @Getter
    @Setter
    @AllArgsConstructor
    public static class Patch{
        private long answerId;
        @NotBlank(message = "내용을 적어주세요.")
        private String answerContent;
    }
    @Getter
    @Builder
    public static class Response{
        private long answerId;
        private String answerContent;
        private LocalDateTime createdAt;
        private LocalDateTime modifiedAt;
    }
}
