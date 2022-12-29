package com.simplilearn.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import com.simplilearn.entity.Product;
import com.simplilearn.repository.ProductRepo;

@Service
public class ProductService {

	@Autowired
	private ProductRepo repo;
	
	public List<Product> findAll(){
		return repo.findAll();
	}
	
	public Product saveProduct(Product product) {
		
		return repo.save(product);
	}
	public String deleteProduct(Long id ) {
		String message="";
		try {
		repo.deleteProductById(id);
		 message="Deleted";
		}catch(Exception e) {
			message="not deleted";
		}
		return message;
	}
	
	public Optional<Product> findById(Long id) {
		
		return repo.findById(id);
	}
	
	public List<Product> getSortedProducts(){
		return repo.findAllByOrderByNameAsc();
	}
	
	public List<Product> getProductByName(String str)
	{
		return repo.findByName(str);
	}

	public List<Product> getProductByCategory(String str) {
	
		return repo.findByCategory(str);
	}
	
}
