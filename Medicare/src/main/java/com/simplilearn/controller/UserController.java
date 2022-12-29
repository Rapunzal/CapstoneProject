package com.simplilearn.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.simplilearn.entity.User;
import com.simplilearn.service.UserService;

@RestController
@RequestMapping("/users")
@CrossOrigin(origins="http://localhost:4200/")
public class UserController {

	@Autowired
	UserService userService;
	
	@GetMapping("/getAllUser")
	public List<User> getAllUser()
	{
		return userService.getAllUser();
	}
	
	@GetMapping("/getUserById/{id}")
	public User getUserById(@PathVariable int id) 
	{
		return userService.getUserById(id);
	}
	
	@PostMapping("/saveUser")
	public User saveUser(@RequestBody User user)
	{
		return userService.saveUser(user);
	}
	
	@PutMapping("/updateUser")
	public User updateUser(@RequestBody User user) 
	{
		return userService.saveUser(user);
	}
	
	@DeleteMapping("/deleteUser/{id}")
	public String deleteUser(@PathVariable int id) 
	{
		return userService.deleteUser(id);	
	}
	
	
	@GetMapping("/getName/{id}")
	public User getName(@PathVariable int id)
	{
		return userService.getName(id);
	}
}
