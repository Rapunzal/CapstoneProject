import { Router } from '@angular/router';
import { UserServiceService } from './../user-service.service';
import { Component } from '@angular/core';
import { User } from 'src/user';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent {
  user:User={
    id: 0,
    email: '',
    password: '',
    name: '',
    phone: ''
  }
  constructor(private userService:UserServiceService,private route:Router){}
  registerUser(data:any)
  {
    this.user=data;
    console.log(data);
    this.userService.addUser(this.user).subscribe(res=>{
      if(res==null){
        alert("Registration failed")
      }else{
        alert("Registration successfull")
        this.route.navigate(['user-login'])
      }
    }

    );
  }
}
