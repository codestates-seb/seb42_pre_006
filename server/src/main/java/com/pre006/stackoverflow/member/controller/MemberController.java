package com.pre006.stackoverflow.member.controller;

import com.pre006.stackoverflow.global.SingleResponse;
import com.pre006.stackoverflow.member.dto.MemberDto;
import com.pre006.stackoverflow.member.entitiy.Member;
import com.pre006.stackoverflow.member.mapper.MemberMapper;
import com.pre006.stackoverflow.member.service.MemberService;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.User;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.net.URI;
import java.net.URISyntaxException;

@SuppressWarnings("rawtypes")
@RestController
@Validated
@RequestMapping("/api/v1/members")
public class MemberController {
    private final MemberService memberService;
    private final MemberMapper memberMapper;
    private static final String BASE_URL = "/api/v1/members";

    public MemberController(MemberService memberService, MemberMapper memberMapper) {
        this.memberService = memberService;
        this.memberMapper = memberMapper;
    }

    @PostMapping
    public ResponseEntity createMember(@Valid @RequestBody MemberDto.Post memberDto) throws URISyntaxException {
        memberService.createMember(
                memberMapper.postMemberDtoToMember(memberDto));
        return ResponseEntity.created(new URI(BASE_URL)).build();
    }

    @GetMapping
    public ResponseEntity getMember(@AuthenticationPrincipal Member members){
        Member member = memberService.findMember(members);
        return ResponseEntity.ok(new SingleResponse<>(memberMapper.memberToResponseMemberDto(member)));
    }
    @PatchMapping
    public ResponseEntity patchMember(@AuthenticationPrincipal Member members, @Valid @RequestBody MemberDto.Patch memberDto){
        Member member = memberService.findMember(members);
        memberService.updateMember(members);
        return ResponseEntity.noContent().build();
    }

}