package com.example.demo.model.projection;

import org.springframework.data.rest.core.config.Projection;

import com.example.demo.model.UserRole;

@Projection(name = "excert-userrole", types = UserRole.class)
public interface UserRoleProjection {
	String getUserRoleName();
}
