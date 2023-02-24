package com.pre006.stackoverflow.member.utils;

import com.pre006.stackoverflow.member.entitiy.Member;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@Component
public class AuthoritiesUtils {

    public static Set<String> ADMINS_EMAIL;

    @Value("${admin.email}")
    public void setKey(String value) {
        ADMINS_EMAIL = Set.of(value.split(","));
    }

    public static List<String> createRoles(String email) {
        if (ADMINS_EMAIL != null && ADMINS_EMAIL.contains(email)) {
            return List.of(Member.MemberRole.ROLE_ADMIN.name(), Member.MemberRole.ROLE_USER.name());
        }
        return List.of(Member.MemberRole.ROLE_USER.name());
    }

    public static List<GrantedAuthority> getAuthorities(List<String> roles) {
        List<GrantedAuthority> authorities = roles.stream()
                .map(role -> new SimpleGrantedAuthority("Role_" +role))
                .collect(Collectors.toList());
        return authorities;
    }
}

