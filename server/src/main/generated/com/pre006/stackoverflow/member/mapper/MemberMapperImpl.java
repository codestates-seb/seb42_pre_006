package com.pre006.stackoverflow.member.mapper;

import com.pre006.stackoverflow.member.dto.MemberDto;
import com.pre006.stackoverflow.member.entitiy.Member;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2023-02-20T11:03:30+0900",
    comments = "version: 1.5.1.Final, compiler: javac, environment: Java 11.0.17 (Azul Systems, Inc.)"
)
@Component
public class MemberMapperImpl implements MemberMapper {

    @Override
    public Member patchMemberDtoToMember(MemberDto.Patch memberDto) {
        if ( memberDto == null ) {
            return null;
        }

        Member.MemberBuilder member = Member.builder();

        member.displayName( memberDto.getDisplayName() );
        member.location( memberDto.getLocation() );
        member.memberTitle( memberDto.getMemberTitle() );
        member.aboutMe( memberDto.getAboutMe() );

        return member.build();
    }
}
