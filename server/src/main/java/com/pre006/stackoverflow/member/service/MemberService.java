package com.pre006.stackoverflow.member.service;
import com.pre006.stackoverflow.answer.excpetion.BusinessLogicException;
import com.pre006.stackoverflow.answer.excpetion.ExceptionCode;


import com.pre006.stackoverflow.global.exception.CustomLogicException;
import com.pre006.stackoverflow.member.entitiy.Member;
import com.pre006.stackoverflow.member.mapper.MemberMapper;
import com.pre006.stackoverflow.member.repository.JpaMemberRepository;
import com.pre006.stackoverflow.member.repository.MemberRepository;
import com.pre006.stackoverflow.member.utils.AuthoritiesUtils;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class MemberService {
    private final MemberRepository memberRepository;
    private final PasswordEncoder passwordEncoder;
    private final AuthoritiesUtils authoritiesUtils;
    public MemberService(MemberRepository memberRepository, PasswordEncoder passwordEncoder, AuthoritiesUtils authoritiesUtils) {
        this.memberRepository = memberRepository;
        this.passwordEncoder = passwordEncoder;
        this.authoritiesUtils = authoritiesUtils;
    }

    public Member createMember(Member member){
        Optional<Member> verifiedMember = memberRepository.findByDisplayName(member.getDisplayName());
        if(verifiedMember.isPresent())
            throw new CustomLogicException(com.pre006.stackoverflow.global.exception.ExceptionCode.DISPLAYNAME_EXISTS);

        String encryptedPassword = passwordEncoder.encode(member.getPassword());
        member.setPassword(encryptedPassword);

        List<String> roles = authoritiesUtils.createRoles(member.getEmail());
        member.setRoles(roles);

        Member savedMember = memberRepository.save(member);
        return savedMember;
    }


    public Member updateMember(Member member) {
        Optional<Member> verifiedMember = memberRepository.findByDisplayName(member.getDisplayName());
        if(verifiedMember.isPresent())
            throw new CustomLogicException(com.pre006.stackoverflow.global.exception.ExceptionCode.DISPLAYNAME_EXISTS);

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