package com.pre006.stackoverflow.answer.excpetion;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public enum ExceptionCode {
    ANSWER_NOT_FOUND(404, "Answer not found");

    private int status;
    private String message;
}
