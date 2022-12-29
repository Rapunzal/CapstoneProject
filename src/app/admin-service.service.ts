import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {

  constructor(private http :HttpClient) { }

fetchAdminList():Observable<any>
{
  console.log("admin list")
  return this.http.get<any>("http://localhost:8081/admin/getAdmin");
}

}
