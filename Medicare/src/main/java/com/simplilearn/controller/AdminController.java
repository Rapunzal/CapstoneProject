package com.simplilearn.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.simplilearn.entity.Admin;
import com.simplilearn.service.AdminService;



@RestController
@RequestMapping("/admin")
@CrossOrigin(origins="http://localhost:4200/")
public class AdminController {

	@Autowired
	AdminService adminService;
	
	@GetMapping("/getAdmin")
	public List<Admin> getAdminList()
	{
		return adminService.getAllAdmin();
	}
	
	@PostMapping("/saveAdmin")
	public Admin addAdmin(@RequestBody Admin admin)
	{
		return adminService.saveAdmin(admin);
	}
}
