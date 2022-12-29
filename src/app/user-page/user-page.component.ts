import { CartServiceService } from './../cart-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgserviceService } from './../ngservice.service';
import { Component, OnInit } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit{
  products:Product[]=[];
  count:number=0;
  constructor(private cartService:CartServiceService,private productService:NgserviceService,private router:ActivatedRoute,private route:Router){}

  u_id:any;
  ngOnInit(): void {
    this.u_id=this.router.snapshot.paramMap.get('id')
    console.log(this.u_id);
    this.productService.fetchRemoteListFromProduct().subscribe(result=>{
      console.log(result)
        this.products=result;
    })
  }

getCart()
{
 // this.router.navigate(['user-page',data.id]);
    this.route.navigate(['cart-page',this.u_id]);
  
}
sortProduct(){
  this.productService.getSortedProductById().subscribe(result=>
    {
      this.products=result; 
  }
  )
}

  addToCart(pid:number)
  {
    this.cartService.addToCart(pid,this.u_id).subscribe(result=>{
        console.log("item added to cart")
    }
    )
  }

  filterByCategory(str:string)
  {
    str="vitamins"
    this.productService.getProductByCategory(str).subscribe(result=>{
        console.log(result)
    }
    )
  }

}
