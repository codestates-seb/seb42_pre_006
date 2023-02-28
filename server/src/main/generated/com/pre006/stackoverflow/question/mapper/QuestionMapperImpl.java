package com.pre006.stackoverflow.question.mapper;

import com.pre006.stackoverflow.question.dto.QuestionDto;
import com.pre006.stackoverflow.question.entity.Question;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2023-02-20T11:03:30+0900",
    comments = "version: 1.5.1.Final, compiler: javac, environment: Java 11.0.17 (Azul Systems, Inc.)"
)
@Component
public class QuestionMapperImpl implements QuestionMapper {

    @Override
    public Question PostDtoToQuestion(QuestionDto.PostDto requestBody) {
        if ( requestBody == null ) {
            return null;
        }

        Question question = new Question();

        question.setQuestionTitle( requestBody.getQuestionTitle() );
        question.setQuestionContent( requestBody.getQuestionContent() );

        return question;
    }

    @Override
    public QuestionDto.ResponseDto questionToResponseDto(Question question) {
        if ( question == null ) {
            return null;
        }

        long questionId = 0L;
        String questionTitle = null;
        String questionContent = null;
        String questionStatus = null;
        String editComment = null;

        if ( question.getQuestionId() != null ) {
            questionId = question.getQuestionId();
        }
        questionTitle = question.getQuestionTitle();
        questionContent = question.getQuestionContent();
        if ( question.getQuestionStatus() != null ) {
            questionStatus = question.getQuestionStatus().name();
        }
        editComment = question.getEditComment();

        QuestionDto.ResponseDto responseDto = new QuestionDto.ResponseDto( questionId, questionTitle, questionContent, questionStatus, editComment );

        return responseDto;
    }
}
