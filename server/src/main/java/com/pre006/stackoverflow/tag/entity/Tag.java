package com.pre006.stackoverflow.tag.entity;

import com.pre006.stackoverflow.global.audit.Auditable;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@NoArgsConstructor
@Getter
@Setter
@Entity
public class Tag extends Auditable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long tagId;

    @Column(nullable = false)
    private String tagName;

    @Column(columnDefinition = "TEXT")
    private String tagInfo;

    @Column(nullable = false)
    private Integer usageCount;

    @OneToMany(mappedBy = "tag")
    private List<QuestionTag> questionTags = new ArrayList<>();

    public Integer getUsageCount() {
        usageCount = questionTags.size();
        return usageCount;
    }

    public void setQuestionTag(QuestionTag questionTag) {
        this.questionTags.add(questionTag);
        if (questionTag.getTag() != this) {
            questionTag.setTag(this);
        }
    }
}
