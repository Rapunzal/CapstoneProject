import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable, VirtualTimeScheduler } from 'rxjs';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class NgserviceService {

  constructor(private http:HttpClient) { }

  fetchRemoteListFromProduct():Observable<any>{
    console.log("Hi in service");
    return this.http.get<any>("http://localhost:8081/products/getProduct");
  }

  addProduct(product:Product){
    console.log("in add product");
    return this.http.post("http://localhost:8081/products/addProduct",product);
  }

  updateProduct(product:Product){
    console.log("in update product");
    return this.http.put("http://localhost:8081/products/updateProduct",product);
  }

  getProductById(id:any)
  {
    console.log("in get product by id");
    return this.http.get<any>("http://localhost:8081/products/getProduct/"+id);
  }

  deleteProductById(id:any)
  {
    console.log("in delete product");
    return this.http.delete("http://localhost:8081/products/deleteProduct/"+id);
  }

  getSortedProductById()
  {
    console.log("in sorted  product");
    return this.http.get<Product[]>("http://localhost:8081/products/getSortedProduct");
  }

  getProductBySearchString(str:string)
  {
    console.log("search");
    return this.http.get<any>("http://localhost:8081/products/getByName/"+str);
  }

  


  getProductByCategory(str:string)
  {
    console.log("filter by category");
    return this.http.get<any>("http://localhost:8081/products/getByCategory/"+str);
  }
}
