package com.pre006.stackoverflow.answervote.dto;

import lombok.*;

import java.time.LocalDateTime;

public class AnswerVoteDto {
    @Getter
    @AllArgsConstructor
    @NoArgsConstructor
    public static class Post{
        private long memberId;
        private long answerId;
        private boolean answerVoteStatus;
    }
    @Getter
    @Setter
    @AllArgsConstructor
    public static class Patch{
        private long memberId;
        private long answerId;
        private boolean answerVoteStatus;
    }
    @Getter
    @Builder
    public static class Response{
        private long answerId;
        private boolean answerVoteStatus;
        private long answerVoteCount;
        private LocalDateTime createdAt;
        private LocalDateTime modifiedAt;


    }

}
