package com.pre006.stackoverflow.member.service;

import com.pre006.stackoverflow.member.entitiy.Member;
import com.pre006.stackoverflow.member.repository.MemberRepository;
import org.springframework.stereotype.Service;

@Service
public class MemberService {
    private final MemberRepository memberRepository;
    public MemberService(MemberRepository memberRepository) {
        this.memberRepository = memberRepository;
    }
    public Member createMember(Member member){
        return memberRepository.save(member);
    }
    public Member updateMember(Member member) {
        return memberRepository.save(member);
    }
    public Member findMember(Member member) {
        return memberRepository.save(member);
    }
    public Member deleteMember(Member member) {
        return memberRepository.save(member);
    }

}
