package com.pre006.stackoverflow.answer.mapper;

import com.pre006.stackoverflow.answer.dto.AnswerDto;
import com.pre006.stackoverflow.answer.entity.Answer;
import java.util.ArrayList;
import java.util.List;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2023-02-20T11:03:30+0900",
    comments = "version: 1.5.1.Final, compiler: javac, environment: Java 11.0.17 (Azul Systems, Inc.)"
)
@Component
public class AnswerMapperImpl implements AnswerMapper {

    @Override
    public Answer answerDtoToAnswer(AnswerDto.Post post) {
        if ( post == null ) {
            return null;
        }

        Answer answer = new Answer();

        answer.setAnswerContent( post.getAnswerContent() );

        return answer;
    }

    @Override
    public Answer answerDtoToAnswer(AnswerDto.Patch patch) {
        if ( patch == null ) {
            return null;
        }

        Answer answer = new Answer();

        answer.setAnswerId( patch.getAnswerId() );
        answer.setAnswerContent( patch.getAnswerContent() );

        return answer;
    }

    @Override
    public AnswerDto.Response answerToAnswerResponse(Answer answer) {
        if ( answer == null ) {
            return null;
        }

        AnswerDto.Response.ResponseBuilder response = AnswerDto.Response.builder();

        if ( answer.getAnswerId() != null ) {
            response.answerId( answer.getAnswerId() );
        }
        response.answerContent( answer.getAnswerContent() );
        response.modifiedAt( answer.getModifiedAt() );

        return response.build();
    }

    @Override
    public List<AnswerDto.Response> answersToAnswerResponses(List<Answer> Answers) {
        if ( Answers == null ) {
            return null;
        }

        List<AnswerDto.Response> list = new ArrayList<AnswerDto.Response>( Answers.size() );
        for ( Answer answer : Answers ) {
            list.add( answerToAnswerResponse( answer ) );
        }

        return list;
    }
}
