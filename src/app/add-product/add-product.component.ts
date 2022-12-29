import { NgserviceService } from './../ngservice.service';
import { Product } from './../product';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit{
  product:Product={
    id: 0,
    name: '',
    price: 0,
    url: '',
    category: '',
    quantity: 0
  };
  id:any;
  constructor(private service:NgserviceService,private route:ActivatedRoute)
  {
  
  }
  ngOnInit(): void 
  {
    this.id=this.route.snapshot.paramMap.get('id')
    this.service.getProductById(this.id).subscribe(res=>{
      this.product=res;
       alert(this.id+" will be Update");
    })
  }
      
  
  addProduct( data:Product){
   alert(data.name);
    this.product=data;
    this.service.updateProduct(this.product).subscribe(res=>{
      if(res != null)
      {
        alert("Product registered successfully")
      }
      else{
        alert("registration failed")
      }
    })
  }
}
