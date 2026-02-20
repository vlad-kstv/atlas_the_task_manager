package com.taskmanager.dto;

import com.taskmanager.enums.Priority;
import com.taskmanager.enums.Status;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class TaskResponseDto {
    @NotNull(message = "Id cannot be null")
    private Long id;
    private String displayedUniqueId;
    @NotBlank(message = "Title cannot be empty")
    private String title;
    private String description;
    @NotNull(message = "Status must be specified")
    private Status status;
    @NotNull(message = "Priority must be specified")
    private Priority priority;
    @NotNull(message = "Project ID must be specified")
    private Long authorId;
    private Long assigneeId;
    @NotBlank
    private String createdAt;
    @NotBlank
    private String updatedAt;
}
