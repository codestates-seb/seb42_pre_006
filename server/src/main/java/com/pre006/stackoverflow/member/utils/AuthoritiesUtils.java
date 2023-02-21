package com.pre006.stackoverflow.member.utils;

import org.springframework.stereotype.Component;

import java.util.Set;

@Component
public class AuthoritiesUtils {

    public static Set<String> ADMINS_EMAIL;

    public void setKey(String value) {
        ADMINS_EMAIL = Set.of(value.split(","));
    }
}

