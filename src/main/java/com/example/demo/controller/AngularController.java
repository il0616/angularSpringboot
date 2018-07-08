package com.example.demo.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/ng")
public class AngularController {
	
	@RequestMapping("")
	public String indexForward() {
		return "forward:/ng/index.html";
	}
	
	
	@RequestMapping("/**/{[path:[^\\.]*}")
	public String angularForward() {
		return "forward:/ng/index.html";
	}
}
