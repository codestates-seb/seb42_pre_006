package com.pre006.stackoverflow.member.mapper;

import com.pre006.stackoverflow.member.dto.MemberDto;
import com.pre006.stackoverflow.member.entitiy.Member;
import org.mapstruct.Mapper;

<<<<<<< HEAD
import java.util.List;

@Mapper(componentModel = "spring")
public interface MemberMapper {
    Member memberDtoToMember(MemberDto.Post post);
    Member memberDtoToMember(MemberDto.Patch patch);
    MemberDto.Response memberToMemberResponse(Member member);
    List<MemberDto.Response> membersToMemberResponse(List<Member> Members);

}
=======
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
    default MemberDto.Response memberToResponseMemberDto(Member member){
        return MemberDto.Response.builder()
                .memberId(member.getMemberId())
                .email(member.getEmail())
                .displayName(member.getDisplayName())
                .location(member.getLocation())
                .aboutMe(member.getAboutMe())
                .memberTitle(member.getMemberTitle())
                .build();
    }
    Member patchMemberDtoToMember(MemberDto.Patch memberDto);

}
>>>>>>> e2b88ac0eb63365d4354a19408517ec912ea0a0a
