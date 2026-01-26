package com.taskmanager.controller;

import com.taskmanager.dto.TaskRequestDto;
import com.taskmanager.dto.TaskResponseDto;
import com.taskmanager.service.TaskService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/tasks")
@RequiredArgsConstructor
public class TaskRestController {

    private final TaskService taskService;

    @PostMapping()
    public TaskResponseDto createTask(@RequestBody TaskRequestDto task) {
        return taskService.createTask(task);
    }

    @GetMapping("/projects/{projectId}/tasks")
    public List<TaskResponseDto> getTaskPerProject(@PathVariable Long projectId) {
        return taskService.getTasksByProjectId(projectId);
    }
}
