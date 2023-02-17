package com.pre006.stackoverflow.question.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

public class QuestionDto {
    @Getter
    @AllArgsConstructor
    public static class PostDto {
        private String questionTitle;
        private String questionContent;

    }

    @Getter
    @AllArgsConstructor
    public static class PatchDto {
        private String questionTitle;
        private String questionContent;
        private String editComment;
    }

    @Getter
    @Setter
    @AllArgsConstructor
    public static class ResponseDto {
        private long questionId;
        private String questionTitle;
        private String questionContent;
        private String questionStatus;
        private String editComment;

        // todo: Member Response Dto
    }
}
