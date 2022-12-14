package com.koreait.spring_pj.vos;

import lombok.*;

@Builder
@Getter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class RoomVO {
    private int roomNo;
    private int roomSize;
    private int roomPrice;
}
