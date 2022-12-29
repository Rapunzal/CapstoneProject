package com.simplilearn.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.simplilearn.entity.User;
import com.simplilearn.repository.UserRepo;

@Service
public class UserService {

	@Autowired
	UserRepo userRepo;
	
	public List<User> getAllUser()
	{
		return userRepo.findAll();
	}
	
	public User saveUser(User user)
	{
		return userRepo.save(user);
	}

	public String deleteUser(int id) {
		// TODO Auto-generated method stub
		if(userRepo.findById(id) != null) {
			userRepo.deleteById(id);
			return "Deleted";
		}else {
			return "Not Deleted";
		}
		 
		
	}

	public User getUserById(int id) {
		// TODO Auto-generated method stub
		return userRepo.findById(id).get();
	}

	public User getName(int id) {
		// TODO Auto-generated method stub
		return userRepo.findById(id).get();
	}

	
}
