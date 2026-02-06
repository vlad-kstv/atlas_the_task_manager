package com.taskmanager.dto;

import jakarta.validation.constraints.NotNull;
import lombok.Data;

@Data
public class ProjectResponseDto {
    @NotNull
    private Long id;
    @NotNull
    private String name;
    private String description;
    @NotNull
    private Long ownerId;
}
