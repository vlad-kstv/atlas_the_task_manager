package com.taskmanager.mapper;

import com.taskmanager.dto.ProjectRequestDto;
import com.taskmanager.dto.ProjectResponseDto;
import com.taskmanager.entity.Project;
import com.taskmanager.entity.User;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.Named;

// componentModel = "spring" allows you to inject this mapper with @Autowired
@Mapper(componentModel = "spring", uses = {ProjectMembershipMapper.class})
public interface ProjectMapper {

    @Mapping(target = "owner", source = "ownerId", qualifiedByName = "toUserEntity")
    Project toEntity(ProjectRequestDto dto);

    @Mapping(target = "ownerId", source = "owner.id")
    ProjectResponseDto toDto(Project project);

    @Named("toUserEntity")
    default User toUserEntity(Long id){
        User user = new User();
        user.setId(id);
        return user;
    }
}