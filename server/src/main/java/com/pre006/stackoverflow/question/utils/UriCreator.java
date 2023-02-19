package com.pre006.stackoverflow.question.utils;

import org.springframework.web.util.UriComponentsBuilder;

import java.net.URI;

public class UriCreator {
    public static URI createUri(String defaultUrl, long resourceId) {
        return UriComponentsBuilder
                .newInstance()
                .path(defaultUrl + "/{resource-id}")
                .buildAndExpand(resourceId)
                .toUri();
    }

    /**
     * questionVote post 요청 시 응답하는 location 생성 메소드
     * @param defaultUrl
     * @param questionId
     * @param questionVoteId
     * @return
     */
    public static URI createUri(String defaultUrl, long questionId, long questionVoteId) {
        return UriComponentsBuilder
                .newInstance()
                .path(defaultUrl + "/{question-id}/vote/{question-vote-id}")
                .buildAndExpand(questionId, questionVoteId)
                .toUri();
    }
}
