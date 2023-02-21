package com.pre006.stackoverflow.login.utils;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class HeaderUtil {

    private final static String HEADER_AUTHORIZATION = "Authorization";
    private final static String TOKEN_PREFIX = "Bearer ";

    private final static String HEADER_REFRESH_TOKEN = "RefreshToken";
    public static String getAccessToken(HttpServletRequest request) {
        String headValue = request.getHeader(HEADER_AUTHORIZATION);
     return null;
    }
}
