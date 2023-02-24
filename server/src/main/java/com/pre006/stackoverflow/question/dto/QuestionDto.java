package com.pre006.stackoverflow.question.dto;

import com.pre006.stackoverflow.global.response.PageInfo;
import com.pre006.stackoverflow.tag.dto.TagDto;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import javax.validation.Valid;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;
import java.time.LocalDateTime;
import java.util.List;

public class QuestionDto {
    @Getter
    @AllArgsConstructor
    public static class PostDto {
        @NotBlank(message = "제목을 입력해주세요.")
        @Size(min = 15, max = 100, message = "제목은 15~100자 사이로 입력해주세요.")
        private String questionTitle;
        @NotBlank(message = "내용을 입력해주세요.")
        @Size(min = 20, max = 5000, message = "내용은 20~5000자 사이로 입력해주세요.")
        private String questionContent;
        @Valid
        private List<TagDto.PostDto> tags;

    }

    @Getter
    @AllArgsConstructor
    public static class PatchDto {
        private long questionId;
        @Size(min = 15, max = 100, message = "제목은 15~100자 사이로 입력해주세요.")
        private String questionTitle;
        @Size(min = 20, max = 5000, message = "내용은 20~5000자 사이로 입력해주세요.")
        private String questionContent;
        @Size(max = 100, message = "수정 코멘트는 100자 이내로 입력해주세요.")
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
        private int answersCount;
        private LocalDateTime createAt;
        private LocalDateTime modifiedAt;
        private String editComment;
        private List<TagDto.ResponseDto> tags;

        // todo: Member Response Dto
    }

    @Getter
    @Setter
    @AllArgsConstructor
    public static class AnswersResponseDto<T> {
        private List<T> data;
        int answersCount;
    }
}