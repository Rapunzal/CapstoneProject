import { CartServiceService } from './../cart-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { UserServiceService } from './../user-service.service';
import { NgserviceService } from './../ngservice.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/user';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{
  u_id:any
  p_id:any
  
  user: User={
    id: 0,
    email: '',
    password: '',
    name: '',
    phone: ''
  }
  products:any=[]
  carts:any
  ngOnInit(): void {
    
    this.u_id=this.arouter.snapshot.paramMap.get('id')
    alert(this.u_id);
    // alert("Welcome to Cart")
    this.getCart()
  }
constructor(private cartService:CartServiceService,private prodService:NgserviceService,private userService:UserServiceService,private route:Router,private arouter:ActivatedRoute){}
grandTotal:number=0;
getCart(){
  console.log("=======")
  this.cartService.getCart(this.u_id).subscribe(result=>{
    console.log("---->"+result);
    this.carts=result;
})
}

ngOnChange(){
  console.log("onchange called")
  this.getCart()
}

increaseQuantity(cart: any,id :any)
{
  cart.unit++;
  cart.totalPrice=cart.unit*cart.product.price;
  this.cartService.updateCart(cart,id).subscribe(result=>{
    console.log("increased quant "+result);
  }

  )
}

decreaseQuantity(cart: any,id :any)
{
  cart.unit--;
  cart.totalPrice=cart.unit*cart.product.price;
  this.cartService.updateCart(cart,id).subscribe(result=>{
      console.log(" quant decrease"+result);
  })
}

deleteCart(id:any)
{
  this.cartService.deleteCart(id).subscribe(result=>
    alert("item deleted")
  )
}

findTotal()
{
  this.cartService.getCart(this.u_id).subscribe(result=>{
    this.carts=result;
    for(let cart of this.carts)
      this.grandTotal=this.grandTotal+cart.totalPrice;
    }
  )
}

payment()
{
  console.log("this.grandTotal ----"+this.grandTotal)
  this.route.navigate(['payment',this.grandTotal,this.u_id]);
}

backToProduct(){
  this.route.navigate(['user-page',this.u_id]);
}

}
