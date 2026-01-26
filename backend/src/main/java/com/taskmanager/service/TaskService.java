package com.taskmanager.service;

import com.taskmanager.dto.TaskRequestDto;
import com.taskmanager.dto.TaskResponseDto;
import com.taskmanager.entity.Task;
import com.taskmanager.entity.User;
import com.taskmanager.mapper.TaskMapper;
import com.taskmanager.repository.TaskRepository;
import com.taskmanager.repository.UserRepository;
import jakarta.persistence.EntityNotFoundException;
import jakarta.transaction.TransactionScoped;
import org.springframework.transaction.annotation.Transactional;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Slf4j
public class TaskService {

    private final TaskRepository repository;
    private final TaskMapper mapper;
    private final UserRepository userRepository;

    @Transactional
    public TaskResponseDto createTask(TaskRequestDto dto) {
        log.debug("Attempting to create a task with title: {}", dto.getTitle());
        Task task = mapper.toEntity(dto);
        Task savedTask = repository.save(task);
        log.info("Successfully created task with id: {}", savedTask.getId());
        return mapper.toDto(task);
    }
    
    @Transactional
    public TaskResponseDto updateTask(Long id, TaskRequestDto dto) {
        log.debug("Attempting to update a task with id: {}", id);
        Task existingTask = repository.findById(id).orElseThrow(() -> new EntityNotFoundException("Task with id:" + id + " not found"));
        mapper.updateEntityFromDto(dto, existingTask);
        if(dto.getAssigneeId() != null) {
            User newAssignee = userRepository.findById(dto.getAssigneeId()).orElseThrow(() -> new EntityNotFoundException("User with id:" + id + " not found"));
            existingTask.setAssignee(newAssignee);
        }
        log.info("Successfully updated task with id: {}", id);
        return mapper.toDto(existingTask);
    }

    @Transactional
    public TaskResponseDto getTaskById(Long id) {
        Task existingTask = repository.findById(id).orElseThrow(() -> new EntityNotFoundException("Task with id:" + id + " not found"));
        return mapper.toDto(existingTask);
    }

    @Transactional
    public List<TaskResponseDto> getTasksByProjectId(Long projectId) {
        List<Task> tasks = repository.findAllByProjectId(projectId);
        return tasks.stream()
                .map(mapper::toDto)
                .collect(Collectors.toList());
    }

    @Transactional
    public void deleteTask(Long id) {
        log.debug("Attempting to delete a task with id: {}", id);
        if(!repository.existsById(id)) {
            throw new EntityNotFoundException("Task with id:" + id + " not found");
        }
        repository.deleteById(id);
        log.info("Successfully deleted a task with id: {}", id);
    }
}
