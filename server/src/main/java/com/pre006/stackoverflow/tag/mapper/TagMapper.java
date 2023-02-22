package com.pre006.stackoverflow.tag.mapper;

import com.pre006.stackoverflow.tag.dto.TagDto;
import com.pre006.stackoverflow.tag.entity.Tag;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")
public interface TagMapper {
    Tag postDtoToTag(TagDto.PostDto requestBody);

    TagDto.ResponseDto tagToResponseDto(Tag tag);

    List<TagDto.ResponseDto> tagsToResponseDtos(List<Tag> tags);
}
