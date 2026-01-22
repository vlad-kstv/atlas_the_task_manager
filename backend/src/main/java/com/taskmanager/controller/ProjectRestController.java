package com.taskmanager.controller;

import com.taskmanager.dto.ProjectRequestDto;
import com.taskmanager.dto.ProjectResponseDto;
import com.taskmanager.service.ProjectService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/projects")
@RequiredArgsConstructor
public class ProjectRestController {

    private final ProjectService service;

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public ProjectResponseDto createProject(@RequestBody ProjectRequestDto dto){
        return service.createProject(dto);
    }

    @GetMapping("/users/{userId}/projects")
    public ProjectResponseDto getProjectByUserId(@PathVariable Long userId) {
        return service.getProjectById(userId);
    }
}
