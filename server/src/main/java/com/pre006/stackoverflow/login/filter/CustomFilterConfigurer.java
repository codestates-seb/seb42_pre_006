package com.pre006.stackoverflow.login.filter;

import com.pre006.stackoverflow.login.handler.CustomAuthenticationFailureHandler;
import com.pre006.stackoverflow.login.handler.CustomAuthenticationSuccessHandler;
import com.pre006.stackoverflow.login.token.AuthTokenProvider;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;

@Configuration
public class CustomFilterConfigurer extends AbstractHttpConfigurer<CustomFilterConfigurer, HttpSecurity> {
    private final AuthTokenProvider authTokenProvider;

    public CustomFilterConfigurer(AuthTokenProvider authTokenProvider) {
        this.authTokenProvider = authTokenProvider;
    }

    @Override
    public void configure(HttpSecurity builder) throws Exception {
        AuthenticationManager authenticationManager = builder.getSharedObject(AuthenticationManager.class);
        JwtAuthenticationFilter jwtAuthenticationFilter = new JwtAuthenticationFilter(authTokenProvider, authenticationManager);
        jwtAuthenticationFilter.setFilterProcessesUrl("/api/v1/login");
        jwtAuthenticationFilter.setAuthenticationSuccessHandler(new CustomAuthenticationSuccessHandler());
        jwtAuthenticationFilter.setAuthenticationFailureHandler(new CustomAuthenticationFailureHandler());
        JwtVerificationFilter jwtVerificationFilter = new JwtVerificationFilter(authTokenProvider);
        builder.addFilter(jwtAuthenticationFilter)
                .addFilterAfter(jwtVerificationFilter, JwtAuthenticationFilter.class);

    }
}
