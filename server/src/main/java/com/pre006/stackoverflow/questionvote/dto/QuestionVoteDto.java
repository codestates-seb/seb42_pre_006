package com.pre006.stackoverflow.questionvote.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

public class QuestionVoteDto {
    @AllArgsConstructor
    @Getter
    public static class PostDto {
        private boolean questionVoteStatus;
//        private long memberId;
        private long questionId;
        public void setQuestionId(long questionId) {
            this.questionId = questionId;
        }
    }

    public static class PatchDto {

    }

    @AllArgsConstructor
    @Getter
    @Setter
    public static class ResponseDto {
        private long questionVoteId;
        private boolean questionVoteStatus;
//        private long memberId;
        private long questionId;
        private LocalDateTime createAt;
        private LocalDateTime modifiedAt;

    }

}
