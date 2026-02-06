package com.taskmanager.service;

import com.taskmanager.entity.Project;
import com.taskmanager.entity.ProjectMembership;
import com.taskmanager.entity.User;
import com.taskmanager.repository.ProjectMembershipRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import static com.taskmanager.enums.Role.OWNER;

@Service
@RequiredArgsConstructor
public class ProjectMembershipService {

    private final ProjectMembershipRepository repository;

    public ProjectMembership createProjectMembership(User member, Project project) {
        ProjectMembership newMembership = new ProjectMembership();
        newMembership.setMember(member);
        newMembership.setProject(project);
        newMembership.setRole(OWNER);
        ProjectMembership savedMembership = repository.save(newMembership);
        return savedMembership;
    }
}
