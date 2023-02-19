package com.pre006.stackoverflow.questionvote.repository;

import com.pre006.stackoverflow.questionvote.entity.QuestionVote;
import org.springframework.data.jpa.repository.JpaRepository;
public interface QuestionVoteRepository extends JpaRepository<QuestionVote, Long> {
    // todo: memberId && question 존재하는지 확인하는 메서드
}
