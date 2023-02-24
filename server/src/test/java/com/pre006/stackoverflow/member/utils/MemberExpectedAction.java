package com.pre006.stackoverflow.member.utils;

import com.pre006.stackoverflow.member.dto.MemberDto;
import org.springframework.test.web.servlet.ResultActions;

import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

public class MemberExpectedAction {
    public static ResultActions expectedResponse(ResultActions resultActions, MemberDto.Response response) throws Exception {
        return resultActions
                .andExpect(status().isOk())
                .andExpect(jsonPath("data.memberId").value(response.getMemberId()))
                .andExpect(jsonPath("data.email").value(response.getEmail()))
                .andExpect(jsonPath("data.displayName").value(response.getDisplayName()))
                .andExpect(jsonPath("data.aboutMe").value(response.getAboutMe()))
                .andExpect(jsonPath("data.memberTitle").value(response.getMemberTitle()))
                .andExpect(jsonPath("data.location").value(response.getLocation()));
    }
}
