package com.taskmanager.dto;

import lombok.Data;

import java.util.HashSet;
import java.util.Set;

@Data
public class ProjectResponseDto {
    private Long id;
    private String name;
    private String description;
    private Long ownerId;
    private Set<ProjectMembershipDto> membershipsDto = new HashSet<>();
}
