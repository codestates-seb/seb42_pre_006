package com.pre006.stackoverflow.question.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

<<<<<<< HEAD
import java.time.LocalDateTime;

=======
>>>>>>> e2b88ac0eb63365d4354a19408517ec912ea0a0a
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
<<<<<<< HEAD
        private long questionId;
        private String questionTitle;
        private String questionContent;
        private String editComment;

        public void setQuestionId(long questionId) {
            this.questionId = questionId;
        }
=======
        private String questionTitle;
        private String questionContent;
        private String editComment;
>>>>>>> e2b88ac0eb63365d4354a19408517ec912ea0a0a
    }

    @Getter
    @Setter
    @AllArgsConstructor
    public static class ResponseDto {
        private long questionId;
        private String questionTitle;
        private String questionContent;
        private String questionStatus;
<<<<<<< HEAD
        private int viewCount;
        private int questionVoteCount;
        private LocalDateTime createAt;
        private LocalDateTime modifiedAt;
=======
>>>>>>> e2b88ac0eb63365d4354a19408517ec912ea0a0a
        private String editComment;

        // todo: Member Response Dto
    }
}
