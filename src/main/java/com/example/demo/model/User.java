package com.example.demo.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import org.springframework.data.rest.core.annotation.RestResource;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@Entity
public class User {
	@Id
	@GeneratedValue
	private Long id;
	
	private String userId;
	
	private String password; 
	
	private String remark;
	
//	@RestResource(exported = false)
	@ManyToOne
	@JoinColumn(name = "user_role_id")
	private UserRole userRole;
	
	@Builder
	public User(String userId, String password, String remark, UserRole userRole) {
		this.userId = userId;
		this.password = password;
		this.remark = remark;
		this.userRole = userRole;
	}
}
