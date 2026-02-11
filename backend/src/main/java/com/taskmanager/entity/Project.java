package com.taskmanager.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.extern.apachecommons.CommonsLog;
import org.hibernate.annotations.NaturalId;

import java.util.HashSet;
import java.util.Set;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "projects")
public class Project {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "project_key", unique = true)
    private String projectKey;
    @Column(name = "task_counter")
    private Long tasksCounter = 0L;
    private String name;
    private String description;
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "owner_id", nullable = false)
    private User owner;
    @OneToMany(mappedBy = "project", cascade = CascadeType.ALL)
    private Set<ProjectMembership> memberships = new HashSet<>();

    public void generateProjectKey() {
        this.projectKey = this.name.substring(0,3).toUpperCase();
    }

    public Long returnTaskCounter() {
        ++this.tasksCounter;
        return this.tasksCounter;
    }
}