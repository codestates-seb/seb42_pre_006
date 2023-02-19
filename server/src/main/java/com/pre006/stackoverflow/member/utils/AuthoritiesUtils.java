package com.pre006.stackoverflow.member.utils;

import com.pre006.stackoverflow.member.entitiy.Member;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Set;

@Component
public class AuthoritiesUtils {

    public static Set<String> ADMINS_EMAIL;

    @Value("${admin.email}")
    public void setKey(String value) {
        ADMINS_EMAIL = Set.of(value.split(","));
    }
}
