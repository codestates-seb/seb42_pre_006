package com.pre006.stackoverflow.answervote.mapper;

import com.pre006.stackoverflow.answervote.dto.AnswerVoteDto;
import com.pre006.stackoverflow.answervote.entity.AnswerVote;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface AnswerVoteMapper {
    @Mapping(source = "answerId", target = "answer.answerId")
    AnswerVote postDtoToAnswerVote(AnswerVoteDto.Post post);

    @Mapping(source = "answer.answerId", target = "answerId")
    AnswerVoteDto.Response answerVoteToResponseDto(AnswerVote answerVote);
}
