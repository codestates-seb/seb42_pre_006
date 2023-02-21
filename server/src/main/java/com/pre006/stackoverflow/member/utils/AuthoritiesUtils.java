package com.pre006.stackoverflow.member.utils;

<<<<<<< HEAD
=======
import com.pre006.stackoverflow.member.entitiy.Member;
import org.springframework.beans.factory.annotation.Value;
>>>>>>> e2b88ac0eb63365d4354a19408517ec912ea0a0a
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Set;

@Component
public class AuthoritiesUtils {

    public static Set<String> ADMINS_EMAIL;

    public void setKey(String value) {
        ADMINS_EMAIL = Set.of(value.split(","));
    }
<<<<<<< HEAD
}
=======
}
>>>>>>> e2b88ac0eb63365d4354a19408517ec912ea0a0a
