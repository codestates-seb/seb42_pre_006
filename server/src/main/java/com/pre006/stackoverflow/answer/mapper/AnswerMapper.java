package com.pre006.stackoverflow.answer.mapper;

import com.pre006.stackoverflow.answer.dto.AnswerDto;
import com.pre006.stackoverflow.answer.entity.Answer;
import com.pre006.stackoverflow.question.entity.Question;
import org.mapstruct.Mapper;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

@Mapper(componentModel = "spring")
public interface AnswerMapper {
    default Answer answerDtoToAnswer(long questionId, AnswerDto.Post post){
        Answer answer = new Answer();
        answer.setAnswerContent(post.getAnswerContent());

        Question question = new Question();
        question.setQuestionId(questionId);
        answer.setQuestion(question);

        return answer;
    }
    Answer answerDtoToAnswer(long questionId, AnswerDto.Patch patch);
    AnswerDto.Response answerToAnswerResponse(Answer answer);
    default List<AnswerDto.Response> answersToAnswerResponses(List<Answer> Answers){
        List<AnswerDto.Response> responses = Answers.stream()
                .map(this::answerToAnswerResponse)
                .collect(Collectors.toList());

        return responses;
    }

}
