package com.taskmanager.service;

import com.taskmanager.dto.ProjectRequestDto;
import com.taskmanager.dto.ProjectResponseDto;
import com.taskmanager.entity.Project;
import com.taskmanager.entity.ProjectMembership;
import com.taskmanager.mapper.ProjectMapper;
import com.taskmanager.repository.ProjectMembershipRepository;
import com.taskmanager.repository.ProjectRepository;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
@Slf4j
@RequiredArgsConstructor
public class ProjectService {
    private final UserService userService;
    private final ProjectRepository repository;
    private final ProjectMembershipRepository membershipRepository;
    private final ProjectMembershipService projectMembershipService;
    private final ProjectMapper mapper;

    @Transactional
    public ProjectResponseDto createProject(ProjectRequestDto dto) {
        log.debug("Attempting to create a project with name {}", dto.getName());
        Project project = mapper.toEntity(dto);
        Project savedProject = repository.save(project);
        ProjectMembership createdMembership = projectMembershipService.createProjectMembership(userService.getCurrentUser(), savedProject);
        log.info("Successfully created a new project membership with id {}", createdMembership.getId());
        return mapper.toDto(createdMembership.getProject());
    }

    @Transactional
    public List<ProjectResponseDto> getUserProjects(Long id) {
        List<ProjectMembership> foundProjects = membershipRepository.findAllByMemberId(id);
        return foundProjects.stream()
                .map((membership -> {
                    Project project = membership.getProject();
                    return mapper.toDto(project);
                }))
                .collect(Collectors.toList());
    }

    @Transactional
    public ProjectResponseDto getProjectById(Long id) {
        Project foundProject =  repository.findById(id).orElseThrow(() -> new EntityNotFoundException("Project with id: " + id + " not found"));
        return mapper.toDto(foundProject);
    }

    @Transactional
    public void updateProject(Long id, ProjectRequestDto dto) {
        log.debug("Attempting to update a task with id: {}", id);
        Project existigProject = repository.findById(id).orElseThrow(() -> new EntityNotFoundException("Project with id:" + id + " not found"));
        mapper.updateEntityFromDto(dto, existigProject);
        log.info("Successfully updated a project with id: {}", id);
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
