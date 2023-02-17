package com.pre006.stackoverflow.question.mapper;

import com.pre006.stackoverflow.question.dto.QuestionDto;
import com.pre006.stackoverflow.question.entity.Question;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface QuestionMapper {
    Question PostDtoToQuestion(QuestionDto.PostDto requestBody);

    QuestionDto.ResponseDto questionToResponseDto(Question question);
}
