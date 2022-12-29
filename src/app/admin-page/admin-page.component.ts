import { Router } from '@angular/router';
import { AdminComponent } from './../admin/admin.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent {

  constructor(private router:Router){}
adminLogout(){
  localStorage.setItem('token','');
  this.router.navigate(['admin'])
}

}
