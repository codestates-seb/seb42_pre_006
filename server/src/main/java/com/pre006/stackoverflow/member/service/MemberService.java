package com.pre006.stackoverflow.member.service;
import com.pre006.stackoverflow.answer.excpetion.BusinessLogicException;
import com.pre006.stackoverflow.answer.excpetion.ExceptionCode;


import com.pre006.stackoverflow.member.entitiy.Member;
import com.pre006.stackoverflow.member.repository.MemberRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

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
        Member findMember = findVerifiedMember(member.getMemberId());
        Optional.ofNullable(member.getPassword()).ifPresent(content -> findMember.setPassword(content));
        Optional.ofNullable(member.getDisplayName()).ifPresent(content -> findMember.setDisplayName(content));
        Optional.ofNullable(member.getLocation()).ifPresent(content -> findMember.setLocation(content));
        Optional.ofNullable(member.getMemberTitle()).ifPresent(content -> findMember.setMemberTitle(content));
        Optional.ofNullable(member.getAboutMe()).ifPresent(content -> findMember.setAboutMe(content));
        return memberRepository.save(findMember);
    }
    public Member findMember(long memberId) {

        return findVerifiedMember(memberId);
    }
    public List<Member> findMembers(){
        return memberRepository.findAll();
    }

    public void deleteMember(long memberId) {
        Member findMember = findVerifiedMember(memberId);
        memberRepository.delete(findMember);
    }
    public Member findVerifiedMember(long memberId){
        Optional<Member> optionalMember = memberRepository.findById(memberId);
        Member findMember = optionalMember.orElseThrow(() -> new BusinessLogicException(ExceptionCode.NOT_FOUND));
        return findMember;
    }

}