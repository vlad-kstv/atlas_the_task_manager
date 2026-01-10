package com.taskmanager.dto;

import lombok.Data;

@Data
public class ProjectRequestDto {
    private Long id;
    private String name;
    private String description;
    private Long ownerId;
}
