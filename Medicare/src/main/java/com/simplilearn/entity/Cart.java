package com.simplilearn.entity;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name="Cart")
public class Cart {

	@Id
	@Column(name="id")
	private int cartId;
	@OneToOne()
	@JoinColumn(name="user_id")
	private User user;
	@ManyToOne(cascade = CascadeType.REMOVE)
	@JoinColumn(name="product_id")
	private Product product;
	private int unit;
	private double totalPrice;
	
	
	
	public Cart(User user, Product product) {
		this.user = user;
		this.product = product;
	}
	public Cart() {
		super();
		// TODO Auto-generated constructor stub
	}
	public int getUnit() {
		return unit;
	}
	public void setUnit(int unit) {
		this.unit = unit;
	}
	public double getTotalPrice() {
		return totalPrice;
	}
	public void setTotalPrice(double totalPrice) {
		this.totalPrice = totalPrice;
	}
	public int getCartId() {
		return cartId;
	}
	public void setCartId(int cartId) {
		this.cartId = cartId;
	}
	public User getUser() {
		return user;
	}
	public void setUser(User user) {
		this.user = user;
	}
	public Product getProduct() {
		return product;
	}
	public void setProduct(Product product) {
		this.product = product;
	}
	
	
}
