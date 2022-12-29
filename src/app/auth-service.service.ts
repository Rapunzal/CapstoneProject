import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor() { }

isLoggedIn(){
  console.log("localstorage ---- "+!!localStorage.getItem('token'))
  return localStorage.getItem('token');
}



}
