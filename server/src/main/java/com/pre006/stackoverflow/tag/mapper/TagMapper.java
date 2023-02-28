package com.pre006.stackoverflow.tag.mapper;

import com.pre006.stackoverflow.question.dto.QuestionDto;
import com.pre006.stackoverflow.question.entity.Question;
import com.pre006.stackoverflow.tag.dto.TagDto;
import com.pre006.stackoverflow.tag.entity.QuestionTag;
import com.pre006.stackoverflow.tag.entity.Tag;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import java.util.List;
import java.util.stream.Collectors;

@Mapper(componentModel = "spring")
public interface TagMapper {
    Tag postDtoToTag(TagDto.PostDto requestBody);

    Tag patchDtoToTag(TagDto.PatchDto requestBody);

    @Mapping(source = "usageCount", target = "usageCount")
    TagDto.ResponseDto tagToResponseDto(Tag tag);

    List<TagDto.ResponseDto> tagsToResponseDtos(List<Tag> tags);
}
