package com.simplilearn.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.simplilearn.entity.Cart;
import com.simplilearn.entity.User;

@Repository
public interface CartRepo extends JpaRepository<Cart, Integer> {

	
	List<Cart> findAllByUserId(int userId);
}
