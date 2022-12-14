package com.koreait.spring_pj.mapper;

import com.koreait.spring_pj.dto.ReserveBoardDTO;
import com.koreait.spring_pj.vos.RoomVO;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import java.util.List;

@Mapper
public interface MangerMapper {
    List<ReserveBoardDTO> get_all_rooms();
    boolean post_room(RoomVO roomVO);
}
