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
        verifiedExistTag(tag.getTagName());

        return tagRepository.save(tag);
    }

    private void verifiedExistTag(String tagName) {
        Optional<Tag> optionalTag = tagRepository.findByTagName(tagName);

        if (optionalTag.isPresent())
            throw new RuntimeException("ALREADY_EXIST_TAG");
    }
}
