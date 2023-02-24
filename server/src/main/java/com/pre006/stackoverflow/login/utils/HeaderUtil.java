package com.pre006.stackoverflow.login.utils;

import javax.servlet.http.HttpServletRequest;

public class HeaderUtil {

    private final static String HEADER_AUTHORIZATION = "Authorization";
    private final static String TOKEN_PREFIX = "Bearer ";

    private final static String HEADER_REFRESH_TOKEN = "RefreshToken";
    public static String getAccessToken(HttpServletRequest request) {
        String headValue = request.getHeader(HEADER_AUTHORIZATION);

        if (headValue == null) {
            return null;
        }

        if(headValue.startsWith(TOKEN_PREFIX)) {
            return headValue.substring(TOKEN_PREFIX.length());
        }

     return null;
    }
    public static String getHeaderRefreshToken(HttpServletRequest request) {
        String headerValue = request.getHeader(HEADER_REFRESH_TOKEN);

        if (headerValue == null) {
            return null;
        }

        if (headerValue.startsWith(TOKEN_PREFIX)) {
            return headerValue.substring(TOKEN_PREFIX.length());
        }

        return null;
    }
}
