package com.taskmanager.service;

import com.taskmanager.dto.UserRequestDto;
import com.taskmanager.entity.User;
import com.taskmanager.mapper.UserMapper;
import com.taskmanager.repository.UserRepository;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
@Slf4j
public class UserService {

    private final UserRepository repository;
    private final UserMapper mapper;

    @Transactional
    public User getUserById(Long id) {
        return repository.findById(id).orElseThrow(() -> new EntityNotFoundException("User with id:" + id + "not found"));
    }

    @Transactional
    public User createUser(UserRequestDto dto) {
        log.debug("Attempting to create a user with username: {}", dto.getUsername());

        User user = mapper.toEntity(dto);

        if(repository.existsByUsername(user.getUsername())){
            log.error("User with username: {} is already exists", user.getUsername());
            return user;
        }

        User savedUser = repository.save(user);
        log.info("Successfully created a user with username: {} and id {}", savedUser.getUsername(), savedUser.getId());
        return savedUser;
    }

    @Transactional
    public User updateUser(Long id, UserRequestDto dto) {
        log.debug("Attempting to update a user with id: {}", id);
        User existingUser = repository.findById(id).orElseThrow(() -> new EntityNotFoundException("User with id:" + id + " not found"));
        User updatedUser = mapper.updateUser(dto);
        log.info("Successfully updated user with id: {}", id);
        return updatedUser;
    }

    @Transactional
    public void deleteUser(Long id) {
        log.debug("Attempting to delete a user with id: {}", id);
        if(!repository.existsById(id)) {
            throw new EntityNotFoundException("User with id:" + id + " not found");
        }
        repository.deleteById(id);
        log.info("Successfully deleted a user with id: {}", id);
    }

}
