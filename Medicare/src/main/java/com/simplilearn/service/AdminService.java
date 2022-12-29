package com.simplilearn.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.simplilearn.entity.Admin;
import com.simplilearn.repository.AdminRepo;

@Service
public class AdminService {

	@Autowired
	AdminRepo adminRepo;
	
	public Admin saveAdmin(Admin admin) 
	{
		System.out.println("---->"+admin.getEmail());
		return adminRepo.save(admin);
	}
	
	public List<Admin> getAllAdmin()
	{
		return adminRepo.findAll();
	}
}
