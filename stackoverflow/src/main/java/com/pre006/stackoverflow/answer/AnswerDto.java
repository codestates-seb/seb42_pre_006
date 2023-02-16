package com.pre006.stackoverflow.answer;

import lombok.AllArgsConstructor;
import lombok.Getter;

public class AnswerDto {
    @Getter
    @AllArgsConstructor
    public static class Post{
        private String answerContent;
    }
    @Getter
    @AllArgsConstructor
    public static class Patch{
        private String answerContent;
    }
    @Getter
    @AllArgsConstructor
    public static class Response{
        private String answerContent;
    }
}
