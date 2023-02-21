package com.pre006.stackoverflow.answervote.repository;

import com.pre006.stackoverflow.answervote.entity.AnswerVote;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AnswerVoteRepository extends JpaRepository<AnswerVote, Long> {

}
