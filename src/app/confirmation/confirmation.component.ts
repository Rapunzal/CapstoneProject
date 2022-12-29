import { UserServiceService } from './../user-service.service';
import { CartServiceService } from './../cart-service.service';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent {
  carts:any;
  total:any;
  u_id:any;
  name:any='';
  grandTotal:number=0;
  constructor(private router:ActivatedRoute,private service:CartServiceService,private userService:UserServiceService){}
  ngOnInit(): void 
  {
    this.total=this.router.snapshot.paramMap.get("str");
    this.u_id=this.router.snapshot.paramMap.get("id");
    console.log(this.total+"total"+" id ---"+this.u_id)
    this.service.getCart(this.u_id).subscribe(result=>{
      console.log(result)
      this.carts=result;
      for(let cart of this.carts)
      {
          this.grandTotal=this.grandTotal+cart.totalPrice;
      }
    }
    )

    this.userService.getUserByName(this.u_id).subscribe(result=>{
        this.name=result;
    }
    )

  }

 

}
