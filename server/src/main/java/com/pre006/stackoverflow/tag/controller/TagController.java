package com.pre006.stackoverflow.tag.controller;

import com.pre006.stackoverflow.global.response.SingleResponse;
import com.pre006.stackoverflow.question.utils.UriCreator;
import com.pre006.stackoverflow.tag.dto.TagDto;
import com.pre006.stackoverflow.tag.entity.Tag;
import com.pre006.stackoverflow.tag.mapper.TagMapper;
import com.pre006.stackoverflow.tag.service.TagService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.net.URI;
import java.util.List;

@Slf4j
@Validated
@CrossOrigin
@RestController
@RequestMapping("/tags")
public class TagController {
    private final String DEFAULT_URL = "/tags";
    private final TagService tagService;
    private final TagMapper mapper;

    public TagController(TagService tagService, TagMapper mapper) {
        this.tagService = tagService;
        this.mapper = mapper;
    }

    @PostMapping
    public ResponseEntity postTag(@Valid @RequestBody TagDto.PostDto requestBody) {
        Tag tag = tagService.createTag(mapper.postDtoToTag(requestBody));

        long id = tag.getTagId();
        URI location = UriCreator.createUri(DEFAULT_URL, id);

        return ResponseEntity.created(location).build();
    }

    @GetMapping("/{tag-name}")
    public ResponseEntity getTag(@PathVariable("tag-name") String tagName) {
        Tag tag = tagService.findTag(tagName);
        TagDto.ResponseDto response = mapper.tagToResponseDto(tag);

        return new ResponseEntity(response, HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity getTags() {
        List<Tag> tags = tagService.findTags();
        List<TagDto.ResponseDto> response = mapper.tagsToResponseDtos(tags);

        return new ResponseEntity(
                new SingleResponse<>(response), HttpStatus.OK);
    }
}
