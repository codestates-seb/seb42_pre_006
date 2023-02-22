package com.pre006.stackoverflow.tag.service;

import com.pre006.stackoverflow.tag.entity.Tag;
import com.pre006.stackoverflow.tag.repository.TagRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
@Transactional
public class TagService {
    private final TagRepository tagRepository;

    public TagService(TagRepository tagRepository) {
        this.tagRepository = tagRepository;
    }

    public Tag createTag(Tag tag) {
        existVerifiedTag(tag.getTagName());

        return tagRepository.save(tag);
    }

    public Tag findTag(long tagId) {

        return findVerifiedTag(tagId);
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
