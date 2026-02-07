package com.taskmanager.controller;

import com.taskmanager.dto.TaskRequestDto;
import com.taskmanager.dto.TaskResponseDto;
import com.taskmanager.service.TaskService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/tasks")
@RequiredArgsConstructor
public class TaskRestController {

    private final TaskService taskService;

    @PostMapping()
    public ResponseEntity<TaskResponseDto> createTask(@RequestBody TaskRequestDto task) {
        TaskResponseDto response = taskService.createTask(task);
        return ResponseEntity
                .status(HttpStatus.CREATED)
                .body(response);
    }

    @GetMapping("/projects/{projectId}/tasks")
    public ResponseEntity<List<TaskResponseDto>> getTaskPerProject(@PathVariable Long projectId) {
        List<TaskResponseDto> response = taskService.getTasksByProjectId(projectId);
        return ResponseEntity
                .status(HttpStatus.CREATED)
                .body(response);
    }
}
