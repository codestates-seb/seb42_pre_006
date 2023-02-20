package com.pre006.stackoverflow.questionvote.repository;

import com.pre006.stackoverflow.questionvote.entity.QuestionVote;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.Optional;

public interface QuestionVoteRepository extends JpaRepository<QuestionVote, Long> {
    // todo: memberId && question 존재하는지 확인하는 메서드 (추후 memberId 추가)
    @Query("select q from QuestionVote q where q.question.questionId = :questionId")
    Optional<QuestionVote> findByQuestionIdAndMemberId(@Param("questionId") long questionId);
}
