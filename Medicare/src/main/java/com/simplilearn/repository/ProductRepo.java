package com.simplilearn.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.simplilearn.entity.Product;

@Repository
public interface ProductRepo extends JpaRepository<Product, Long> {
	
	public List<Product> findAllByOrderByNameAsc();
	
	public void deleteProductById(Long id);
	
	public List<Product> findByName(String str);

	public List<Product> findByCategory(String str);

}
