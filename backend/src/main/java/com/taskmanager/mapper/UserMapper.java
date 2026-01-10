package com.taskmanager.mapper;

import com.taskmanager.dto.UserRequestDto;
import com.taskmanager.dto.UserResponseDto;
import com.taskmanager.entity.User;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

// componentModel = "spring" allows you to inject this mapper with @Autowired
@Mapper(componentModel = "spring", uses = {ProjectMembershipMapper.class})
public interface UserMapper {

    @Mapping(target = "passwordHash", ignore = true)
    UserResponseDto toDto(User user);

    @Mapping(target = "passwordHash", source = "password", qualifiedByName = "toPasswordHash")
    User toEntity(UserRequestDto user);

    default String toPasswordHash(String password) {
        BCryptPasswordEncoder crypt = new BCryptPasswordEncoder();
        return crypt.encode(password);
    }
}
