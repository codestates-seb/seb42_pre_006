package com.pre006.stackoverflow.question.mapper;

import com.pre006.stackoverflow.question.dto.QuestionDto;
import com.pre006.stackoverflow.question.entity.Question;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")
public interface QuestionMapper {
    Question postDtoToQuestion(QuestionDto.PostDto requestBody);

    Question patchDtoToQuestion(QuestionDto.PatchDto requestBody);

    QuestionDto.ResponseDto questionToResponseDto(Question question);

    List<QuestionDto.ResponseDto> questionsToResponseDtos(List<Question> questions);
}