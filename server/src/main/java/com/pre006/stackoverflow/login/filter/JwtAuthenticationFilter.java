package com.pre006.stackoverflow.login.filter;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.google.gson.Gson;
import com.pre006.stackoverflow.login.dto.LoginDto;
import com.pre006.stackoverflow.login.token.AuthToken;
import com.pre006.stackoverflow.login.token.AuthTokenProvider;
import com.pre006.stackoverflow.member.entitiy.Member;
import lombok.SneakyThrows;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;


import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

public class JwtAuthenticationFilter extends UsernamePasswordAuthenticationFilter {
    private final AuthTokenProvider authTokenProvider;
    private final AuthenticationManager authenticationManager;

    public JwtAuthenticationFilter(AuthTokenProvider authTokenProvider, AuthenticationManager authenticationManager) {
        this.authTokenProvider = authTokenProvider;
        this.authenticationManager = authenticationManager;
    }

    @Override
    @SneakyThrows
    public Authentication attemptAuthentication(HttpServletRequest request, HttpServletResponse response) {
//        Gson gson = new Gson();
//        LoginDto loginDto = null;
//        try {
//            loginDto = gson.fromJson(request.getReader(), LoginDto.class);
//        }catch (IOException e) {
//            throw new RuntimeException(e);
//        }
//        UsernamePasswordAuthenticationToken authenticationToken = new UsernamePasswordAuthenticationToken(loginDto.getEmail(), loginDto.getPassword());
//        return authenticationManager.authenticate(authenticationToken);
        ObjectMapper objectMapper = new ObjectMapper();
        LoginDto loginDto = objectMapper.readValue(request.getInputStream(), LoginDto.class);

        UsernamePasswordAuthenticationToken authenticationToken =
                new UsernamePasswordAuthenticationToken(loginDto.getEmail(), loginDto.getPassword());

        return authenticationManager.authenticate(authenticationToken);
    }

    @Override
    protected void successfulAuthentication(HttpServletRequest request, HttpServletResponse response,
                                            javax.servlet.FilterChain chain, Authentication authResult)
            throws IOException, ServletException {
        Member member = (Member) authResult.getPrincipal();
        AuthToken accessToken = authTokenProvider.createAccessToken(member.getEmail(), member.getRoles());
        AuthToken refreshToken = authTokenProvider.createRefreshToken(member.getEmail());
        response.addHeader("Authorization", "Bearer " + accessToken.getToken());
        response.addHeader("RefreshToken", "Bearer " + refreshToken.getToken());
        this.getSuccessHandler().onAuthenticationSuccess(request, response, authResult);
    }
}
