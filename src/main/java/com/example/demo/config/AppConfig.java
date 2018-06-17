package com.example.demo.config;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.example.demo.member.Member;
import com.example.demo.member.MemberRepository;

@Configuration
public class AppConfig {

	@Bean
	public CommandLineRunner commandLineRunner(MemberRepository memberRepo) {
		return args -> {
			memberRepo.save(new Member("이철수", "chulsoo", "test111"));
			memberRepo.save(new Member("김정인", "jungin11", "test222"));
			memberRepo.save(new Member("류정우", "jwryu991", "test333"));
		};
	}
	
}
