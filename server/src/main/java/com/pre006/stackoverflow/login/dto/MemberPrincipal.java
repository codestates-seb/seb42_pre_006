package com.pre006.stackoverflow.login.dto;

import com.pre006.stackoverflow.member.entitiy.Member;
import com.pre006.stackoverflow.member.utils.AuthoritiesUtils;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;


public class MemberPrincipal extends Member implements UserDetails {
    public MemberPrincipal(Member member) {
        setMemberId(member.getMemberId());
        setEmail(member.getEmail());
        setPassword(member.getPassword());
        setRoles(member.getRoles());
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return AuthoritiesUtils.getAuthorities(getRoles());
    }

    @Override
    public String getUsername() {
        return this.getEmail();
    }

    @Override
    public boolean isAccountNonExpired() {
        return this.getMemberStatus().equals(MemberStatus.MEMBER_ACTIVE);
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }
}
