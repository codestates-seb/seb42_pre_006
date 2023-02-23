package com.pre006.stackoverflow.question.mapper;

import com.pre006.stackoverflow.question.dto.QuestionDto;
import com.pre006.stackoverflow.question.entity.Question;
import com.pre006.stackoverflow.tag.dto.TagDto;
import com.pre006.stackoverflow.tag.entity.QuestionTag;
import com.pre006.stackoverflow.tag.entity.Tag;
import org.mapstruct.Mapper;

import java.util.List;
import java.util.stream.Collectors;

@Mapper(componentModel = "spring")
public interface QuestionMapper {
    default Question postDtoToQuestion(QuestionDto.PostDto requestBody) {
        if (requestBody == null) {
            return null;
        } else {
            Question question = new Question();
            question.setQuestionTitle(requestBody.getQuestionTitle());
            question.setQuestionContent(requestBody.getQuestionContent());

            if (requestBody.getTags() != null) {
                List<Tag> tags = postDtosToTags(requestBody.getTags());
                question.setTags(tags);
            }

            return question;
        }
    }

    default List<Tag> postDtosToTags(List<TagDto.PostDto> postDtos) {

        return postDtos.stream()
                .map(postDto -> {
                    Tag tag = new Tag();
                    tag.setTagName(postDto.getTagName());
                    return tag;
                })
                .collect(Collectors.toList());
    }

    default List<Tag> questionToTags(Question question) {

        return question.getQuestionTags().stream()
                .map(questionTag -> questionTag.getTag())
                .collect(Collectors.toList());
    }

    Question patchDtoToQuestion(QuestionDto.PatchDto requestBody);

    QuestionDto.ResponseDto questionToResponseDto(Question question);

    List<QuestionDto.ResponseDto> questionsToResponseDtos(List<Question> questions);

    default List<Question> tagToQuestions(Tag tag) {
        List<QuestionTag> questionTags = tag.getQuestionTags();

        return questionTags.stream()
                .map(questionTag ->
                        questionTag.getQuestion())
                .collect(Collectors.toList());
    }
}