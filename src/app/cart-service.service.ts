import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {

  constructor(private http:HttpClient) { }

addToCart(pid:number,uid:number)
{
  console.log("get add cart")
  return this.http.get("http://localhost:8081/cart/addToCart/"+pid+"/"+uid);
}

getCart(uid:number)
{
  console.log("in get cart service"+uid);
  return this.http.get<any>("http://localhost:8081/cart/getCart/"+uid);
}

updateCart(cart :any,cartId:any)
{
  console.log("update cart");
  return this.http.put("http://localhost:8081/cart/updateCart/"+cartId,cart);
}

deleteCart(uid:number)
{
  console.log("in delete cart service");
  return this.http.delete("http://localhost:8081/cart/deleteCart/"+uid);
}

}
