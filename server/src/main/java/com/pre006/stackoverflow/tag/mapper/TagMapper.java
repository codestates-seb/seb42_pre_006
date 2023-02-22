package com.pre006.stackoverflow.tag.mapper;

import com.pre006.stackoverflow.tag.dto.TagDto;
import com.pre006.stackoverflow.tag.entity.Tag;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface TagMapper {
    Tag postDtoToTag(TagDto.PostDto requestBody);

    TagDto.ResponseDto tagToResponseDto(Tag tag);
}
