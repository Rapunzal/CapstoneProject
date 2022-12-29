import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit
{
  cardNumber!:number;
  cardName!:string;
  constructor(private router:ActivatedRoute,private route:Router){}

  total:any;
  u_id:any;

  ngOnInit(): void 
  {
    this.total=this.router.snapshot.paramMap.get("str");
    this.u_id=this.router.snapshot.paramMap.get("id");
    console.log(this.total+"total"+" id ---"+this.u_id)
  }

  payment(){
    console.log(this.cardName+"  "+this.cardNumber)

    this.route.navigate(['confirmation',this.total,this.u_id])
  }

}
