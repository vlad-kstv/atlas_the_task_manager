package com.taskmanager.dto;

import com.taskmanager.enums.Priority;
import com.taskmanager.enums.Status;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

@Data
public class TaskDto {
    private Long id;
    @NotBlank(message = "Title cannot be empty")
    private String title;
    private String description;
    @NotNull(message = "Status must be specified")
    private Status status;
    @NotNull(message = "Priority must be specified")
    private Priority priority;
    @NotNull(message = "Project ID must be specified")
    private Long projectId;
    @NotNull(message = "Author ID must be specified")
    private Long authorId;
    private Long assigneeId;
}
