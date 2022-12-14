package com.koreait.spring_pj.controller;

import lombok.extern.log4j.Log4j2;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Log4j2
@Controller
@RequestMapping("/manager")
public class ManagerController {
    @PreAuthorize("hasRole('ADMIN')")
    @GetMapping("/room")
    public void manage_room(){

    }
}
