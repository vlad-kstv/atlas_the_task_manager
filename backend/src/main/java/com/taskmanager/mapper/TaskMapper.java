package com.taskmanager.mapper;

import com.taskmanager.dto.TaskRequestDto;
import com.taskmanager.dto.TaskResponseDto;
import com.taskmanager.entity.Project;
import com.taskmanager.entity.Task;
import com.taskmanager.entity.User;
import org.mapstruct.*;

// componentModel = "spring" allows you to inject this mapper with @Autowired
@Mapper(componentModel = "spring")
public interface TaskMapper {

    @Mapping(target = "projectId", source = "project.id")
    @Mapping(target = "authorId", source = "author.id")
    @Mapping(target = "assigneeId", source = "assignee.id")
    TaskResponseDto toDto(Task task);

    @Mapping(target = "project", source = "projectId", qualifiedByName = "idToProject")
    @Mapping(target = "author", source = "authorId", qualifiedByName = "idToUser")
    @Mapping(target = "assignee", source = "assigneeId", qualifiedByName = "idToUser")
    Task toEntity(TaskRequestDto dto);

    @Mapping(target = "id", ignore = true)
    @Mapping(target = "createdAt", ignore = true)
    @Mapping(target = "project", ignore = true)
    @Mapping(target = "author", ignore = true)
    @Mapping(target = "assignee", ignore = true)
    void updateEntityFromDto(TaskRequestDto dto, @MappingTarget Task task);

    @Named("idToProject")
    default Project idToProject(Long projectId) {
        if (projectId == null) return null;
        Project project = new Project();
        project.setId(projectId);
        return project;
    }

    @Named("idToUser")
    default User idToUser(Long userId) {
        if(userId == null) return null;
        User user = new User();
        user.setId(userId);
        return user;
    }
}
