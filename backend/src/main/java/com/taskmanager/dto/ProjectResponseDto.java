package com.taskmanager.dto;

import jakarta.validation.constraints.NotNull;
import lombok.Data;

import java.util.HashSet;
import java.util.Set;

@Data
public class ProjectResponseDto {
    @NotNull
    private Long id;
    @NotNull
    private String name;
    private String description;
    @NotNull
    private Long ownerId;
    private Set<UserResponseDto> members = new HashSet<>();
}
