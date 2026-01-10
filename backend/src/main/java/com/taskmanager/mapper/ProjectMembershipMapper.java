package com.taskmanager.mapper;

import com.taskmanager.dto.ProjectMembershipDto;
import com.taskmanager.entity.Project;
import com.taskmanager.entity.ProjectMembership;
import com.taskmanager.entity.User;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.Named;

@Mapper(componentModel = "spring")
public interface ProjectMembershipMapper {

    @Mapping(target = "project", source = "projectId", qualifiedByName = "idToProject")
    @Mapping(target = "member", source = "memberId", qualifiedByName = "idToUser")
    ProjectMembership toEntity(ProjectMembershipDto dto);

    @Mapping(target = "projectId", source = "project.id")
    @Mapping(target = "memberId", source = "member.id")
    ProjectMembershipDto toDto(ProjectMembership membership);

    @Named("idToProject")
    default Project idToProject(Long projectId) {
        if (projectId == null) return null;
        Project project = new Project();
        project.setId(projectId);
        return project;
    }

    @Named("idToUser")
    default User idToUser(Long memberId) {
        if(memberId == null) return null;
        User user = new User();
        user.setId(memberId);
        return user;
    }
}