package com.pre006.stackoverflow.answer.mapper;

import com.pre006.stackoverflow.answer.dto.AnswerDto;
import com.pre006.stackoverflow.answer.entity.Answer;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")
public interface AnswerMapper {
    Answer answerDtoToAnswer(AnswerDto.Post post);
    Answer answerDtoToAnswer(AnswerDto.Patch patch);
    AnswerDto.Response answerToAnswerResponse(Answer answer);
    List<AnswerDto.Response> answersToAnswerResponses(List<Answer> Answers);

}
