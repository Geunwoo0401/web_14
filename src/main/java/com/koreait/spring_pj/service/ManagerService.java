package com.koreait.spring_pj.service;

import com.koreait.spring_pj.dto.ReserveBoardDTO;
import com.koreait.spring_pj.mapper.MangerMapper;
import com.koreait.spring_pj.vos.RoomVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ManagerService {
    @Autowired
    private MangerMapper mangerMapper;

    public List<ReserveBoardDTO> get_all_rooms(){
        return mangerMapper.get_all_rooms();
    }

    //방 추가(생성)
    public boolean post_room(RoomVO roomVO){
        return mangerMapper.post_room(roomVO);
    }
}
