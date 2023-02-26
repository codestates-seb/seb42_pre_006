package com.pre006.stackoverflow.tag.service;

import com.pre006.stackoverflow.tag.entity.Tag;
import com.pre006.stackoverflow.tag.repository.TagRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class TagService {
    private final TagRepository tagRepository;

    public TagService(TagRepository tagRepository) {
        this.tagRepository = tagRepository;
    }

    public Tag createTag(Tag tag) {
        createTagValidation(tag.getTagName());

        return tagRepository.save(tag);
    }

    public Tag findTag(String tagName) {

        return findTagValidation(tagName);
    }

    public List<Tag> findTags() {

        return tagRepository.findAll();
    }

    public Tag updateTagInfo(Tag tag) {
        Tag findTag = findVerifiedTag(tag.getTagId());

        findTag.setTagInfo(tag.getTagInfo());
        return tagRepository.save(findTag);
    }

    private Optional<Tag> existVerifiedTag(String tagName) {
        // 태그 이름으로 조회하여 결과 리턴해주는 메소드
        Optional<Tag> optionalTag = tagRepository.findByTagName(tagName);

        return optionalTag;
    }

    private void createTagValidation(String tagName) {
        // 태그 이름으로 조회했을 때, 등록된 태그가 있다면 Exception!
        if (existVerifiedTag(tagName).isPresent())
            throw new RuntimeException("ALREADY_EXIST_TAG");
    }

    public Tag getQuestionTagsValidation(String tagName) {
        // 태그 이름으로 조회했을 때,
        // 등록된 태그가 있다면 Tag 객체를 리턴, 없다면 null 리턴
        Optional<Tag> optionalTag = existVerifiedTag(tagName);
        return optionalTag.isPresent() ? optionalTag.get() : null;
    }

    public Tag findTagValidation(String tagName) {
        return existVerifiedTag(tagName).orElseThrow(() ->
                new RuntimeException("NOT_FOUND_TAG"));
    }

    private Tag findVerifiedTag(long tagId) {
        Optional<Tag> optionalTag = tagRepository.findById(tagId);

        return optionalTag.orElseThrow(() ->
                new RuntimeException("NOT_FOUND_TAG"));
    }
}
