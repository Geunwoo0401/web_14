package com.koreait.spring_pj.mapper;

import com.koreait.spring_pj.dto.ReserveBoardDTO;
import com.koreait.spring_pj.vos.RoomVO;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

@Mapper
public interface ReserveMapper {
    //예약되어있지 않은 모든 방을 가져옴
    List<RoomVO> get_empty_rooms();
    //예약되어있는 예약 정보(방 정보 포함)를 가져옴
    List<ReserveBoardDTO> get_reserved_rooms();
    //방 번호를 받아 해당 방을 예약한다
    boolean reserve_room(
            @Param("roomNo") int roomNo,
            @Param("userID") String userID
    );
}











