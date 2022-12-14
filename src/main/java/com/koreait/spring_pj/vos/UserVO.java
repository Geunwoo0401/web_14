package com.koreait.spring_pj.vos;

import com.koreait.spring_pj.domain.UserEntity;
import com.koreait.spring_pj.domain.UserRole;
import lombok.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.User;

import java.util.Collection;
import java.util.Set;


@Getter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class UserVO extends UserEntity {
    private Set<UserRole> userRoles;

}
