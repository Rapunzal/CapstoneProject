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

import com.simplilearn.entity.Product;
import com.simplilearn.service.ProductService;

@RestController
@RequestMapping("/products")
@CrossOrigin(origins="http://localhost:4200/")
public class ProductController {

	@Autowired
	private ProductService productService;
	
	@GetMapping("/getProduct")
	public List<Product> getProductList(){
		return productService.findAll();
	}
	
	@GetMapping("/getProduct/{id}")
	public Product getProduct(@PathVariable Long id){
		return productService.findById(id).get();
	}
	
	@PostMapping("/addProduct")
	public Product addProduct(@RequestBody Product product) 
	{
		return productService.saveProduct(product);
	}
	
	@PutMapping("/updateProduct")
	public Product updateProduct(@RequestBody Product product) 
	{
		return productService.saveProduct(product);
	}
	
	@DeleteMapping("/deleteProduct/{id}")
	public String deleteProduct(@PathVariable Long id) 
	{
		System.out.println("in delete product------"+id);
		return productService.deleteProduct(id);
	}
	
	@GetMapping("/getSortedProduct")
	public List<Product> getSortedProducts(){
		return productService.getSortedProducts();
	}
	
	@GetMapping("/getByName/{str}")
	public List<Product> getProductByName(@PathVariable String str)
	{
		System.out.println("hi===="+productService.getProductByName(str));
		return productService.getProductByName(str);
	}
	

	@GetMapping("/getByCategory/{str}")
	public List<Product> getProductByCategory(@PathVariable String str)
	{
		System.out.println("hi===="+productService.getProductByName(str));
		return productService.getProductByCategory(str);
	}
	
}
