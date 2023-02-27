package com.pre006.stackoverflow.answervote.dto;

import lombok.*;

import java.time.LocalDateTime;

public class AnswerVoteDto {
    @Getter
    @Setter
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
        private long answerVoteId;
        private long answerId;
        private long memberId;
        private boolean answerVoteStatus;
        private LocalDateTime createdAt;
        private LocalDateTime modifiedAt;


    }

}
