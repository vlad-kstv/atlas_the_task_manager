package com.taskmanager.repository;

import com.taskmanager.entity.ProjectMembership;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProjectMembershipRepository extends JpaRepository<ProjectMembership, Long> {
}
