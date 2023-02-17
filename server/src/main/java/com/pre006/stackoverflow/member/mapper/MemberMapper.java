package com.pre006.stackoverflow.member.mapper;

import com.pre006.stackoverflow.member.dto.MemberDto;
import com.pre006.stackoverflow.member.entitiy.Member;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface MemberMapper {
    default Member postMemberDtoToMember(MemberDto.Post memberDto) {
        Member member = Member.builder()
                .email(memberDto.getEmail())
                .password(memberDto.getPassword())
                .displayName(memberDto.getDisplayName())
                .build();
        return member;
    }

}
