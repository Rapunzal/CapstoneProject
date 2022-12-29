import { ActivatedRoute, Router } from '@angular/router';
import { AdminServiceService } from './../admin-service.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  username:string='';
  password:string='';
  constructor(private service:AdminServiceService,private router:Router){}

  adminLogin(){
   
    this.service.fetchAdminList().subscribe( adminList =>{
      console.log(adminList+"===========")
      adminList.forEach((data: { email: string; password: string; }) => {
        console.log("username "+this.username+"  "+this.password)
        if(data.email== this.username && data.password == this.password)
        {
          alert("Login successful");
          localStorage.setItem('token',"hgdgfjbvjh-dnjdbvjh-klkioubhawgf");
          this.username=="admin@gmail.com"?localStorage.setItem('userType','user') : localStorage.setItem('userType','admin');
          this.router.navigate(['admin-page']);
        }
        else{
          console.log("invalid credentials, enter valid data")
        }
      });

     } )
  }


}
