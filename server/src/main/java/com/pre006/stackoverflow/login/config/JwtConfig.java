package com.pre006.stackoverflow.login.config;

import com.pre006.stackoverflow.login.token.AuthTokenProvider;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class JwtConfig {
    @Value("${jwt.secret}")
    private String secret;
    @Value("${jwt.expiration}")
    private Long tokenValidTime;
    @Value("${jwt.refresh.expiration}")
    private Long refreshTokenValidTime;

    @Bean
    public AuthTokenProvider AuthTokenProvider() {
        return new AuthTokenProvider(secret, tokenValidTime, refreshTokenValidTime);
    }
}
