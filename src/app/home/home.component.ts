import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/user';
import { CartServiceService } from '../cart-service.service';
import { NgserviceService } from '../ngservice.service';
import { Product } from '../product';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
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
    alert("Login first to continue..")
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
