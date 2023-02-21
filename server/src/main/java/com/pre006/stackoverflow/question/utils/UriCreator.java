package com.pre006.stackoverflow.question.utils;

import org.springframework.web.util.UriComponentsBuilder;

import java.net.URI;

public class UriCreator {
<<<<<<< HEAD
=======
    public static URI createUri(String defaultUrl) {
        return UriComponentsBuilder
                .newInstance()
                .path(defaultUrl)
                .buildAndExpand()
                .toUri();
    }
>>>>>>> e2b88ac0eb63365d4354a19408517ec912ea0a0a
    public static URI createUri(String defaultUrl, long resourceId) {
        return UriComponentsBuilder
                .newInstance()
                .path(defaultUrl + "/{resource-id}")
                .buildAndExpand(resourceId)
                .toUri();
    }
<<<<<<< HEAD

    public static URI createUri(String defaultUrl, long questionId, long id) {
        return UriComponentsBuilder
                .newInstance()
                .path(defaultUrl + "/{question-id}/vote/{id}")
                .buildAndExpand(questionId, id)
                .toUri();
    }


=======
>>>>>>> e2b88ac0eb63365d4354a19408517ec912ea0a0a
}
