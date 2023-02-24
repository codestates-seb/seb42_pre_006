package com.pre006.stackoverflow.login.service;

import com.pre006.stackoverflow.global.exception.CustomLogicException;
import com.pre006.stackoverflow.global.exception.ExceptionCode;
import com.pre006.stackoverflow.login.dto.MemberPrincipal;
import com.pre006.stackoverflow.member.entitiy.Member;
import com.pre006.stackoverflow.member.repository.JpaMemberRepository;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;

@Component
public class CustomUserDetailService implements UserDetailsService {
    private final JpaMemberRepository memberRepository;

    public CustomUserDetailService(JpaMemberRepository memberRepository) {
        this.memberRepository = memberRepository;
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Member member = memberRepository.findByEmail(username)
                .orElseThrow(() -> new CustomLogicException(ExceptionCode.MEMBER_NONE));
        return new MemberPrincipal(member);
    }

}
