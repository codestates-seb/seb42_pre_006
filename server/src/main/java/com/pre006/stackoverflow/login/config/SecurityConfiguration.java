package com.pre006.stackoverflow.login.config;

import com.pre006.stackoverflow.login.filter.CustomFilterConfigurer;
import com.pre006.stackoverflow.login.token.AuthTokenProvider;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.crypto.factory.PasswordEncoderFactories;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.CorsUtils;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import java.util.Arrays;

import static org.springframework.security.config.Customizer.withDefaults;

@Configuration
public class SecurityConfiguration {
    @Value("${config.domain}")
    private String domain;
    @Value("${config.local-domain}")
    private String local;
    private final AuthTokenProvider authTokenProvider;
    public SecurityConfiguration(AuthTokenProvider authTokenProvider) {
        this.authTokenProvider = authTokenProvider;
    }

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
                .headers().frameOptions().sameOrigin()
                .and()
                .cors().configurationSource(corsConfigurationSource())
                .and()
                .csrf().disable()
                .formLogin().disable()
                .httpBasic().disable()
                .apply(new CustomFilterConfigurer(authTokenProvider))
                .and()
                .authorizeHttpRequests(authorize -> authorize.anyRequest().permitAll());
        return http.build();
    }

    @Bean
    CorsConfigurationSource corsConfigurationSource() {
        CorsConfiguration configuration = new CorsConfiguration();
        configuration.setAllowedOrigins(Arrays.asList(domain, local));
        configuration.setAllowedMethods(Arrays.asList("GET", "POST", "PATCH", "DELETE", "OPTIONS"));
        configuration.setAllowCredentials(true);
        configuration.setMaxAge(3600L);
        configuration.setAllowedHeaders(Arrays.asList("x-requested-with", "origin", "content-type",
                "accept" ,"Access-Control-Allow-Origin"));

        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", configuration);
        return source;
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return PasswordEncoderFactories.createDelegatingPasswordEncoder();
    }
}
