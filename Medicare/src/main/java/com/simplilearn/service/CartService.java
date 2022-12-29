package com.simplilearn.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.simplilearn.entity.Cart;
import com.simplilearn.repository.CartRepo;

@Service
public class CartService {

	@Autowired
	CartRepo cartRepo;
	
	public Cart addToCart(Cart cart) 
	{
		return cartRepo.save(cart);
	}
	
	public void deleteCart(int id) 
	{
		cartRepo.deleteById(id);
	}
	
	public Cart updateCart(Cart cart,int cid)
	{
		System.out.println("in update cart---->"+cid);
		Cart test=cartRepo.findById(cid).get();
		test=cart;
		return cartRepo.save(test);
	}

	public List<Cart> getCart(int id) {
		
		return cartRepo.findAllByUserId(id);
	}
}
