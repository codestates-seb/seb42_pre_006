package com.pre006.stackoverflow.member.controller;

<<<<<<< HEAD
=======
import com.pre006.stackoverflow.global.SingleResponse;
>>>>>>> e2b88ac0eb63365d4354a19408517ec912ea0a0a
import com.pre006.stackoverflow.member.dto.MemberDto;
import com.pre006.stackoverflow.member.entitiy.Member;
import com.pre006.stackoverflow.member.mapper.MemberMapper;
import com.pre006.stackoverflow.member.service.MemberService;
<<<<<<< HEAD
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

=======
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.User;
>>>>>>> e2b88ac0eb63365d4354a19408517ec912ea0a0a
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.net.URI;
import java.net.URISyntaxException;
<<<<<<< HEAD
import java.util.List;
=======
>>>>>>> e2b88ac0eb63365d4354a19408517ec912ea0a0a

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
<<<<<<< HEAD
                memberMapper.memberDtoToMember(memberDto));
=======
                memberMapper.postMemberDtoToMember(memberDto));
>>>>>>> e2b88ac0eb63365d4354a19408517ec912ea0a0a
        return ResponseEntity.created(new URI(BASE_URL)).build();
    }

    @GetMapping
<<<<<<< HEAD
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
=======
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

>>>>>>> e2b88ac0eb63365d4354a19408517ec912ea0a0a
}