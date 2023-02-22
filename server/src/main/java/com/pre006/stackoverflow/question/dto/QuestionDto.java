package com.pre006.stackoverflow.question.dto;

import com.pre006.stackoverflow.tag.dto.TagDto;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;
import java.util.List;

public class QuestionDto {
    @Getter
    @AllArgsConstructor
    public static class PostDto {
        private String questionTitle;
        private String questionContent;
        private List<TagDto.PostDto> tags;

    }

    @Getter
    @AllArgsConstructor
    public static class PatchDto {
        private long questionId;
        private String questionTitle;
        private String questionContent;
        private String editComment;

        public void setQuestionId(long questionId) {
            this.questionId = questionId;
        }
    }

    @Getter
    @Setter
    @AllArgsConstructor
    public static class ResponseDto {
        private long questionId;
        private String questionTitle;
        private String questionContent;
        private String questionStatus;
        private int viewCount;
        private int questionVoteCount;
        private LocalDateTime createAt;
        private LocalDateTime modifiedAt;
        private String editComment;

        // todo: Member Response Dto
    }
}