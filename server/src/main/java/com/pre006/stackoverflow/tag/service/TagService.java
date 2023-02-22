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
        // todo: 중복 태그 등록 안되게 할지 확인 필요
        existVerifiedTag(tag.getTagName());

        return tagRepository.save(tag);
    }

    public Tag findTag(long tagId) {

        return findVerifiedTag(tagId);
    }

    public List<Tag> findTags() {

        return tagRepository.findAll();
    }

    private void existVerifiedTag(String tagName) {
        Optional<Tag> optionalTag = tagRepository.findByTagName(tagName);

        if (optionalTag.isPresent())
            throw new RuntimeException("ALREADY_EXIST_TAG");
    }

    private Tag findVerifiedTag(long tagId) {
        Optional<Tag> optionalTag = tagRepository.findById(tagId);

        return optionalTag.orElseThrow(() ->
                new RuntimeException("NOT_EXIST_TAG"));
    }
}
