package com.pre006.stackoverflow.global.exception;

import lombok.Getter;

@Getter
public enum ExceptionCode {

    TITLE_NONE(400, "TITLE_NONE"),
    MEMBER_NONE(404, "MEMBER_NONE"),
    MEMBER_DUPLICATE(409, "MEMBER_DUPLICATE"),
    DISPLAYNAME_EXISTS(409, "DisplayName Exists"),
    TOKEN_INVALID(401, "TOKEN_INVALID");



    @Getter
    private final int code;

    @Getter
    private final String message;

    ExceptionCode(int code, String message) {
        this.code = code;
        this.message = message;
    }
}
