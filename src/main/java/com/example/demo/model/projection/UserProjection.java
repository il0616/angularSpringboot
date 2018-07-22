package com.example.demo.model.projection;

import java.util.Collection;

import org.springframework.data.rest.core.config.Projection;

import com.example.demo.model.User;
import com.example.demo.model.UserRole;

@Projection(name = "with-userrole", types = {User.class})
public interface UserProjection {
	String getUserId();
	
	String getRemark();
	
	UserRoleProjection getUserRole();
}
