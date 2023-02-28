package com.pre006.stackoverflow.member.repository;

import com.pre006.stackoverflow.member.entitiy.Member;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Optional;

public interface MemberRepository extends JpaRepository<Member, Long> {
    Optional<Member> findByEmail(String email);
    Optional<Member> findByDisplayName(String displayName);
}

