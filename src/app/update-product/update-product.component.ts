import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgserviceService } from '../ngservice.service';
import { Product } from '../product';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent {
  product:Product={
    id: 0,
    name: '',
    price: 0,
    url: '',
    category: '',
    quantity: 0
  };
  id:any;
  constructor(private service:NgserviceService,private route:ActivatedRoute,private router:Router)
  {
  
  }
  ngOnInit(): void 
  {
    this.id=this.route.snapshot.paramMap.get('id')
    this.service.getProductById(this.id).subscribe(res=>{
      this.product=res;
      // alert(this.id+"==> will be Updated");
       console.log(this.product.id);
    })
  }
      
  backToMain(){
    this.router.navigate(['admin-page']);
  }

  
  editProduct( data:Product){
   //alert(data.name);
    this.product=data;
    this.service.updateProduct(this.product).subscribe(res=>{
      if(res != null)
      {
        alert("Product Updated successfully")
      }
      else{
        alert("registration failed")
      }
    })
  } 
}
