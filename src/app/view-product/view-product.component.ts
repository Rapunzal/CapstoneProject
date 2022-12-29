import { NgserviceService } from './../ngservice.service';
import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { Router } from '@angular/router';
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {
  productList:Product[] =[];
  
  
  constructor(private service:NgserviceService,private route:Router){}

  ngOnInit(): void {
     this.service.fetchRemoteListFromProduct().subscribe(
      data=>
      {
        console.log("Got product",data);
      this.productList=data;
      console.log(this.productList)
    },
    error=>console.log("exception recoved ")
    )
  }

sortProduct(){
  this.service.getSortedProductById().subscribe(result=>
    {
      this.productList=result; 
  }
  )
}

loginFirst(){
  alert("Login First")
}

filterProduct()
{
  //this.service.getProductByCategory(str).subscribe()
}

  updateProduct(id:number)
  {
    //alert(id+" product will update");
    this.route.navigate(['/updateProduct',id])
    .then(nav => {
      console.log(nav); // true if navigation is successful
    }, err => {
      console.log(err) // when there's an error
    });
  }
  product!:any;
  deleteProduct(id:number)
{
  this.service.deleteProductById(id).subscribe(res=>
    {
      console.log(res+"------")
   if(res)
      alert(id+" Deleted")
    },
    (err)=>{
      alert(id+" err Deleted")
    }

  )
}

}
