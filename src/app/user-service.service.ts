import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'src/user';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  
  constructor(private http:HttpClient) { }

  getUserList():Observable<any>
  {
    return this.http.get<any>("http://localhost:8081/users/getAllUser");
  }

  getUserById(id:any)
  {
    console.log("in get user by id")
    return this.http.get<any>("http://localhost:8081/users/getUserById/"+id);
  }

  updateUser(user:User)
  {
    console.log("in update user")
    return this.http.put("http://localhost:8081/users/updateUser",user);
  }


  addUser(user:User)
  {
    console.log("in add user")
    return this.http.post("http://localhost:8081/users/saveUser",user);
  }


  deleteUser(id:any)
  {
    console.log("in delete user")
    return this.http.delete("http://localhost:8081/users/deleteUser/"+id);
  }

  ////

  getUserByName(id:any)
  {
    console.log("in get user by name")
    return this.http.get<any>("http://localhost:8081/users/getName/"+id);
  }

}
