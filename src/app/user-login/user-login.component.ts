import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { User } from 'src/user';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {
email:string='';
password:string ='';
user:User[]=[];
id:any;
constructor(private userService:UserServiceService,private router:Router) {
}

userLogin(data:any){
  this.userService.getUserList().subscribe(userList =>{
      console.log(userList);
      userList.forEach((data: { email: string; password: string; id: any; })=>{
          if(data.email==this.email && data.password==this.password)
          {
            alert("Login successful")
            console.log("login success")
            localStorage.setItem('token',"hgdgfjbvjh-dnjdbvjh-klkioubhawgf-uidhrbvsejuhdvjbj-jfdhh")
             this.id=data.id;
            this.router.navigate(['user-page',data.id]);
          }else{
            console.log("Invalid login,enter valid credentails")
          }
        })
      
})    
}
}
