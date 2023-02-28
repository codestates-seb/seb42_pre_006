package com.pre006.stackoverflow.member.controller;

import com.google.gson.Gson;
import com.pre006.stackoverflow.common.abstractControllerTest;
import com.pre006.stackoverflow.common.token.GeneratedToken;
import com.pre006.stackoverflow.member.dto.MemberDto;
import com.pre006.stackoverflow.member.entitiy.Member;
import com.pre006.stackoverflow.member.factory.MemberFactory;
import com.pre006.stackoverflow.member.mapper.MemberMapper;
import com.pre006.stackoverflow.member.service.MemberService;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.restdocs.payload.JsonFieldType;
import org.springframework.restdocs.payload.RequestFieldsSnippet;
import org.springframework.restdocs.payload.ResponseFieldsSnippet;
import org.springframework.security.test.context.support.WithMockUser;
import org.springframework.test.web.servlet.ResultActions;

import static com.pre006.stackoverflow.member.factory.MemberFactory.createMemberPatchDto;
import static com.pre006.stackoverflow.member.factory.MemberFactory.createMemberPostDto;
import static com.pre006.stackoverflow.member.utils.MemberExpectedAction.expectedResponse;
import static com.pre006.stackoverflow.util.ApiDocumentUtils.getRequestPreProcessor;
import static com.pre006.stackoverflow.util.ApiDocumentUtils.getResponsePreProcessor;
import static org.mockito.ArgumentMatchers.*;
import static org.mockito.BDDMockito.given;
import static org.springframework.restdocs.headers.HeaderDocumentation.headerWithName;
import static org.springframework.restdocs.headers.HeaderDocumentation.requestHeaders;
import static org.springframework.restdocs.mockmvc.MockMvcRestDocumentation.document;
import static org.springframework.restdocs.mockmvc.RestDocumentationRequestBuilders.*;
import static org.springframework.restdocs.payload.PayloadDocumentation.*;
import static org.springframework.security.test.web.servlet.request.SecurityMockMvcRequestPostProcessors.csrf;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@WebMvcTest(MemberController.class)
class MemberControllerTest extends abstractControllerTest {

//    private final String BASE_URL = "/api/v1/members";
//    @MockBean
//    private MemberService memberService;
//    @MockBean
//    private MemberMapper mapper;
//
//    @Autowired
//    private Gson gson;
//
//    @Test
//    @DisplayName("회원가입")
//    @WithMockUser(username = "test@gmail.com", roles = "USER")
//    void createMember() throws Exception {
//        MemberDto.Post post = createMemberPostDto();
//        String json = gson.toJson(post);
//
//        ResultActions resultActions = mockMvc.perform(post(BASE_URL)
//                .contentType("application/json")
//                .with(csrf())
//                .content(json))
//                .andExpect(status().isCreated());
//
//        resultActions.andDo(document("member-create",
//                getRequestPreProcessor(),
//                getResponsePreProcessor(),
//                getRequestFieldsSnippet()));
//    }
//
//    @Test
//    @DisplayName("회원 정보 GET")
//    @WithMockUser(username = "test@gmail.com", roles = "USER")
//     void getMember() throws Exception {
//        MemberDto.Response response = MemberFactory.createMemberResponseDto();
//        given(memberService.findMember(anyLong())).willReturn(new Member());
//        given(mapper.memberToMemberResponse(any(Member.class))).willReturn(response);
//
//        ResultActions resultActions = mockMvc.perform(get(BASE_URL)
//                .contentType("application/json")
//                .headers(GeneratedToken.getMockHeaderToken())
//                .with(csrf()));
//        resultActions = expectedResponse(resultActions, response);
//
//        resultActions.andDo(document("member-get",
//                getRequestPreProcessor(),
//                getResponsePreProcessor(),
//                requestHeaders(
//                        headerWithName("Authorization").description("JWT 토큰")
//                ),
//                getResponseFieldsSnippet()));
//     }
//
//    @Test
//    @DisplayName("회원 정보 수정")
//    @WithMockUser
//    void updateMember() throws Exception {
//        // given
//        MemberDto.Patch put = createMemberPatchDto();
//        String json = gson.toJson(put);
//        // when
//        ResultActions resultActions = mockMvc.perform(patch(BASE_URL)
//                        .contentType("application/json")
//                        .headers(GeneratedToken.getMockHeaderToken())
//                        .with(csrf())
//                        .content(json))
//                .andExpect(status().isNoContent());
//        // then
//        resultActions.andDo(document("member-update",
//                getRequestPreProcessor(),
//                getResponsePreProcessor(),
//                requestHeaders(
//                        headerWithName("Authorization").description("JWT 토큰")
//                ),
//                requestFields(
//                        fieldWithPath("displayName").type(JsonFieldType.STRING).description("닉네임"),
//                        fieldWithPath("aboutMe").type(JsonFieldType.STRING).description("자기소개"),
//                        fieldWithPath("memberTitle").type(JsonFieldType.STRING).description("자기소개 제목"),
//                        fieldWithPath("location").type(JsonFieldType.STRING).description("지역")
//                )
//        ));
//    }
//
//    private static ResponseFieldsSnippet getResponseFieldsSnippet() {
//        return responseFields(
//                fieldWithPath("data").type(JsonFieldType.OBJECT).description("회원 정보"),
//                fieldWithPath("data.memberId").type(JsonFieldType.NUMBER).description("회원 ID"),
//                fieldWithPath("data.email").type(JsonFieldType.STRING).description("이메일"),
//                fieldWithPath("data.displayName").type(JsonFieldType.STRING).description("닉네임"),
//                fieldWithPath("data.aboutMe").type(JsonFieldType.STRING).description("자기소개"),
//                fieldWithPath("data.memberTitle").type(JsonFieldType.STRING).description("자기소개 제목"),
//                fieldWithPath("data.location").type(JsonFieldType.STRING).description("지역")
//        );
//    }
//
//    private static RequestFieldsSnippet getRequestFieldsSnippet() {
//        return requestFields(
//                fieldWithPath("email").type(JsonFieldType.STRING).description("이메일 / not null"),
//                fieldWithPath("password").type(JsonFieldType.STRING).description("비밀번호 / not null"),
//                fieldWithPath("displayName").type(JsonFieldType.STRING).description("닉네임 / not null")
//        );
//    }

}