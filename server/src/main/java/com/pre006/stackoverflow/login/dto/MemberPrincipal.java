package com.pre006.stackoverflow.login.dto;

import com.pre006.stackoverflow.member.entitiy.Member;

import java.util.Collection;

public class MemberPrincipal extends Member {
    public MemberPrincipal(Member member) {
        setMemberId(member.getMemberId());
        setEmail(member.getEmail());
        setPassword(member.getPassword());
    }

    public String getUsername() {
        return this.getEmail();
    }

    public boolean isAccountNonLocked() {
        return true;
    }

    public boolean isCredentialNonExpired() {
        return true;
    }

    public boolean isEnabled() {
        return true;
    }
}
