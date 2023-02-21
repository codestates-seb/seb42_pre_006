package com.pre006.stackoverflow.question.mapper;

import com.pre006.stackoverflow.question.dto.QuestionDto;
import com.pre006.stackoverflow.question.entity.Question;
import org.mapstruct.Mapper;

<<<<<<< HEAD
import java.util.List;

@Mapper(componentModel = "spring")
public interface QuestionMapper {
    Question postDtoToQuestion(QuestionDto.PostDto requestBody);

    Question patchDtoToQuestion(QuestionDto.PatchDto requestBody);

    QuestionDto.ResponseDto questionToResponseDto(Question question);

    List<QuestionDto.ResponseDto> questionsToResponseDtos(List<Question> questions);
=======
@Mapper(componentModel = "spring")
public interface QuestionMapper {
    Question PostDtoToQuestion(QuestionDto.PostDto requestBody);

    QuestionDto.ResponseDto questionToResponseDto(Question question);
>>>>>>> e2b88ac0eb63365d4354a19408517ec912ea0a0a
}
