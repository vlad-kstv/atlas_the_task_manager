package com.taskmanager.repository;

import com.taskmanager.entity.Project;
import com.taskmanager.entity.ProjectMembership;
import com.taskmanager.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProjectMembershipRepository extends JpaRepository<ProjectMembership, Long> {
    List<ProjectMembership> findAllByMemberId(Long userId);
}
