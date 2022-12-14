package com.koreait.spring_pj.vos;

import lombok.*;

import javax.validation.Valid;
import javax.validation.constraints.NotNull;
import java.time.LocalDate;
@Getter
@AllArgsConstructor
@NoArgsConstructor
@Builder
@ToString
public class ReserveVO {
    private int reserveNo;
    private int reserveRoom;
    private String reserveUser;
    private LocalDate reserveDate;
}
