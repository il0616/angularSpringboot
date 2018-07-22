package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import com.example.demo.model.UserRole;

@RepositoryRestResource()
public interface UserRoleRepository extends JpaRepository<UserRole, Integer> {

}
