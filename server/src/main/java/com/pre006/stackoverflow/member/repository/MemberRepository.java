package com.pre006.stackoverflow.member.repository;

import com.pre006.stackoverflow.member.entitiy.Member;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MemberRepository extends JpaRepository<Member, Long> {
}
