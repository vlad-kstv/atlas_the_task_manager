package com.taskmanager.service;

import com.taskmanager.dto.TaskRequestDto;
import com.taskmanager.entity.Task;
import com.taskmanager.entity.User;
import com.taskmanager.mapper.TaskMapper;
import com.taskmanager.repository.TaskRepository;
import com.taskmanager.repository.UserRepository;
import jakarta.persistence.EntityNotFoundException;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class TaskService {

    private final TaskRepository repository;
    private final TaskMapper mapper;
    private final UserRepository userRepository;

    @Transactional
    public Task createTask(TaskRequestDto dto) {
        Task task = mapper.toEntity(dto);
        return repository.save(task);
    }
    
    @Transactional
    public Task updateTask(Long id, TaskRequestDto dto) {
        Task existingTask = repository.findById(id).orElseThrow(() -> new EntityNotFoundException("Task with id:" + id + " not found"));

        mapper.updateEntityFromDto(dto, existingTask);
        if(dto.getAssigneeId() != null) {
            User newAssignee = userRepository.findById(dto.getAssigneeId()).orElseThrow(() -> new EntityNotFoundException("User with id:" + id + " not found"));
            existingTask.setAssignee(newAssignee);
        }
        return existingTask;
    }

    @Transactional
    public Task getTaskById(Long id) {
        return repository.findById(id).orElseThrow(() -> new EntityNotFoundException("Task with id:" + id + " not found"));
    }

    @Transactional
    public void deleteTask(Long id) {
        if(!repository.existsById(id)) {
            throw new EntityNotFoundException("Task with id:" + id + " not found");
        }
        repository.deleteById(id);
    }
}
