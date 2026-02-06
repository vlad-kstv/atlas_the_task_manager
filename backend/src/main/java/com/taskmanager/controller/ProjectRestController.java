package com.taskmanager.controller;

import com.taskmanager.dto.ProjectRequestDto;
import com.taskmanager.dto.ProjectResponseDto;
import com.taskmanager.service.ProjectService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/projects")
@RequiredArgsConstructor
@Slf4j
public class ProjectRestController {

    private final ProjectService service;

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public ResponseEntity<ProjectResponseDto> createProject(@RequestBody ProjectRequestDto dto){
        // temporary fix
        if(dto.getOwnerId() == null) {
            dto.setOwnerId(1L);
        }
        ProjectResponseDto response = service.createProject(dto);
        return ResponseEntity
                .status(HttpStatus.CREATED)
                .body(response);
    }

    @GetMapping("/users/{userId}/projects")
    public ResponseEntity<List<ProjectResponseDto>> getUserProjects(@PathVariable Long userId) {
        log.info("Attempting to get project from user with ID: {}", userId);
        List<ProjectResponseDto> response = service.getUserProjects(userId);
        return ResponseEntity
                .status(HttpStatus.OK)
                .body(response);
    }
}
