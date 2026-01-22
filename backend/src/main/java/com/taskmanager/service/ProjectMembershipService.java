package com.taskmanager.service;

import com.taskmanager.repository.ProjectMembershipRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class ProjectMembershipService {

    private final ProjectMembershipRepository repository;


}
