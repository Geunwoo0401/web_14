package com.koreait.spring_pj;

import com.koreait.spring_pj.domain.UserRole;
import com.koreait.spring_pj.dto.ReserveBoardDTO;
import com.koreait.spring_pj.mapper.MangerMapper;
import com.koreait.spring_pj.mapper.ReserveMapper;
import com.koreait.spring_pj.mapper.UserMapper;
import com.koreait.spring_pj.vos.UserVO;
import lombok.extern.log4j.Log4j2;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;
import java.util.Set;

@Log4j2
@SpringBootTest
class SpringPjApplicationTests {
    @Autowired
    ReserveMapper reserveMapper;
    @Autowired
    UserMapper userMapper;
    @Autowired
    MangerMapper mangerMapper;

    @Test
    void get_reservations(){
        List<ReserveBoardDTO> dtos = mangerMapper.get_all_rooms();
        for (ReserveBoardDTO dto : dtos) {
            log.info(dto.getReserveVO());
            log.info(dto.getRoomVO());
        }
    }


    @Test
    void contextLoads() {
        UserVO vo = userMapper.userVO_with_roles("test");
        log.info(vo);
        log.info(vo.getUserID());
        log.info(vo.getUserName());
        log.info(vo.getUserTel());
        log.info(vo.getUserEmail());
        log.info(vo.getUserRoles());
    }

}








