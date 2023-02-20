package com.pre006.stackoverflow.questionvote.mapper;

import com.pre006.stackoverflow.questionvote.dto.QuestionVoteDto;
import com.pre006.stackoverflow.questionvote.entity.QuestionVote;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface QuestionVoteMapper {
    @Mapping(source = "questionId", target = "question.questionId")
    QuestionVote postDtoToQuestionVote(QuestionVoteDto.PostDto requestBody);

    @Mapping(source = "question.questionId", target = "questionId")
    QuestionVoteDto.ResponseDto questionVoteToResponseDto(QuestionVote questionVote);
}
