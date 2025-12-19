package com.taskmanager.dto;

import jakarta.validation.constraints.NotNull;
import lombok.Data;

@Data
public class ProjectMembershipDto {
    private Long id;
    @NotNull(message = "projectId cannot be null")
    private Long projectId;
    @NotNull(message = "memberId cannot be null")
    private Long memberId;
}
