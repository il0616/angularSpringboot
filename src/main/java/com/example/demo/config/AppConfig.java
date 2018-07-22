package com.example.demo.config;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.example.demo.model.User;
import com.example.demo.model.UserRole;
import com.example.demo.repository.UserRepository;
import com.example.demo.repository.UserRoleRepository;

@Configuration
public class AppConfig {

	@Bean
	public CommandLineRunner commandLineRunner(UserRepository userRepo, UserRoleRepository userRoleRepo) {
		return args -> {
			UserRole root = new UserRole("Root");
			UserRole admin = new UserRole("Administrator");
			UserRole operator = new UserRole("Operator");
			userRoleRepo.save( root );
			userRoleRepo.save( admin );
			userRoleRepo.save( operator );
			
			userRepo.save(User.builder()
					.userId("root")
					.password("root123")
					.remark("루트 계정임")
					.userRole(root)
					.build());
			userRepo.save(User.builder()
					.userId("admin")
					.password("admin123")
					.remark("어드민 계정임")
					.userRole(admin)
					.build());
			userRepo.save(User.builder()
					.userId("test")
					.password("test123")
					.remark("사용자 계정임")
					.userRole(operator)
					.build());
		};
	}
	
}
