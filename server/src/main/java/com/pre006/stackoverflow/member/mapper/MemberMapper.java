package com.pre006.stackoverflow.member.mapper;

import com.pre006.stackoverflow.member.dto.MemberDto;
import com.pre006.stackoverflow.member.entitiy.Member;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")
public interface MemberMapper {
    Member memberDtoToMember(MemberDto.Post post);
    Member memberDtoToMember(MemberDto.Patch patch);
    MemberDto.Response memberToMemberResponse(Member member);
    List<MemberDto.Response> membersToMemberResponse(List<Member> Members);

}