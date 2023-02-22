package com.pre006.stackoverflow.member.controller;

import com.pre006.stackoverflow.member.dto.MemberDto;
import com.pre006.stackoverflow.member.entitiy.Member;
import com.pre006.stackoverflow.member.mapper.MemberMapper;
import com.pre006.stackoverflow.member.service.MemberService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.net.URI;
import java.net.URISyntaxException;

import java.util.List;


@SuppressWarnings("rawtypes")
@RestController
@Validated
@RequestMapping("api/v1/members")
public class MemberController {
    private final MemberService memberService;
    private final MemberMapper memberMapper;
    private static final String BASE_URL = "api/v1/members";

    public MemberController(MemberService memberService, MemberMapper memberMapper) {
        this.memberService = memberService;
        this.memberMapper = memberMapper;
    }

    @PostMapping
    public ResponseEntity createMember(@Valid @RequestBody MemberDto.Post memberDto) throws URISyntaxException {
        memberService.createMember(
                memberMapper.memberDtoToMember(memberDto));
        return ResponseEntity.created(new URI(BASE_URL)).build();
    }

    @GetMapping
    public  ResponseEntity getMembers(){
        List<Member> members = memberService.findMembers();
        return new ResponseEntity<>(memberMapper.membersToMemberResponse(members), HttpStatus.OK);
    }

    @GetMapping("/{member-id}")
    public ResponseEntity getMember(@PathVariable("member-id") long memberId){
        Member member = memberService.findMember(memberId);
        return new ResponseEntity<>(memberMapper.memberToMemberResponse(member), HttpStatus.OK);
    }
    @PatchMapping("/{member-id}")
    public ResponseEntity patchMember(@PathVariable("member-id") long memberId,
                                      @Valid @RequestBody MemberDto.Patch memberDto){
        memberDto.setMemberId(memberId);
        Member member = memberService.updateMember(memberMapper.memberDtoToMember(memberDto));
        return new ResponseEntity<>(memberMapper.memberToMemberResponse(member), HttpStatus.OK);
    }
    @DeleteMapping("/{member-id}")
    public ResponseEntity deleteMember(@PathVariable("member-id") long memberId){
        memberService.deleteMember(memberId);
        System.out.println("삭제 되었습니다.");
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}