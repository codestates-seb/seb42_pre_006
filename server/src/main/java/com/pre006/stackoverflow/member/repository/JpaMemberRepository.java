package com.pre006.stackoverflow.member.repository;

import com.pre006.stackoverflow.member.entitiy.Member;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface JpaMemberRepository extends JpaRepository<Member, Long>, MemberRepository {
    Optional<Member> findByEmail(String email);
}
