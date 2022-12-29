package com.simplilearn.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.simplilearn.entity.Cart;
import com.simplilearn.entity.Product;
import com.simplilearn.entity.User;
import com.simplilearn.service.CartService;
import com.simplilearn.service.ProductService;
import com.simplilearn.service.UserService;

@RestController
@CrossOrigin("http://localhost:4200/")
@RequestMapping("/cart")
public class CartController {
	
	@Autowired
	CartService cartService;
	
	@Autowired
	ProductService productService;
	
	@Autowired
	UserService userService;
	
	
	@GetMapping("/addToCart/{productId}/{userId}")
	public ResponseEntity<Cart> addToCart(@PathVariable Long productId,@PathVariable int userId)
	{
		
		Product product=productService.findById(productId).get();
		User user=userService.getUserById(userId);
		Cart cart =new Cart(user,product);
		System.out.println(user.getId());
		cart.setUnit(1);
		cart.setTotalPrice(cart.getUnit()*product.getPrice());
		Cart addCart = cartService.addToCart(cart);
		return new ResponseEntity<Cart>(addCart, HttpStatus.CREATED);

	}

	@GetMapping("/getCart/{cartId}")
	public ResponseEntity<List> getCart(@PathVariable int cartId)
	{
		List<Cart> cart = cartService.getCart(cartId);
		return new ResponseEntity<List>(cart,HttpStatus.CREATED);
	}
	
	@DeleteMapping("/deleteCart/{cartId}")
	public ResponseEntity<?> deleteCart(@PathVariable int cartId)
	{
		cartService.deleteCart(cartId);
		return new ResponseEntity<>(HttpStatus.OK);
	}
	
	@PutMapping("/updateCart/{cid}")
	public ResponseEntity<Cart> updateCart(@RequestBody Cart cart,@PathVariable int cid)
	{
		  Cart updatedCart=cartService.updateCart(cart, cid);
		  return new ResponseEntity<Cart>(updatedCart,HttpStatus.CREATED);
	}
}
