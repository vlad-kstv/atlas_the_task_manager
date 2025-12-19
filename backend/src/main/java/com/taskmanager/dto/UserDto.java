package com.taskmanager.dto;

import jakarta.validation.constraints.NotBlank;
import lombok.Data;

import java.util.HashSet;
import java.util.Set;

@Data
public class UserDto {
    private Long id;
    @NotBlank(message = "username cannot be empty")
    private String username;
    @NotBlank(message = "email cannot be empty")
    private String email;
    private Set<ProjectMembershipDto> projectMemberships = new HashSet<>();
}
