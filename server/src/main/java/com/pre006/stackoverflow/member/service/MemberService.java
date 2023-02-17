package com.pre006.stackoverflow.member.service;

import com.pre006.stackoverflow.member.entitiy.Member;

public interface MemberService {

    Member createMember(Member member);
    Member findMember(String email);
    Member findMember(Long id);
    Member updateMember(Member member, Member patchMemberDtoToMember);
}
