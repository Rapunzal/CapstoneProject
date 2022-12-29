import { ActivatedRoute } from '@angular/router';
import { NgserviceService } from './../ngservice.service';
import { Component, OnInit } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit{
  productList:Product[]=[];
  text:any;
  constructor(private service:NgserviceService,private router:ActivatedRoute){}

  ngOnInit(): void {
    this.text = this.router.snapshot.paramMap.get('str');
    console.log(this.text+"----------")

    this.service.getProductBySearchString(this.text).subscribe(result=>{
      this.productList=result;
      console.log(result+"result")
    }
    )
  }



}
