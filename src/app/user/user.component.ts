import { UserServiceService } from './../user-service.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/user';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit{
  users:User[]=[]
  
  constructor(private service:UserServiceService,private route:Router){}

  ngOnInit(): void {
    this.service.getUserList().subscribe(data=>{
      console.log(data);
        this.users=data;
    }
    )
  }

  updateUser(id:number)
  {
    //alert(id+" product will update");
    this.route.navigate(['/updateUser',id])
    .then(nav => {
      console.log(nav); // true if navigation is successful
    }, err => {
      console.log(err) // when there's an error
    });
  }
  
  deleteUser(id:number)
  {
    this.service.deleteUser(id).subscribe(res=>
      {
        
            alert("deleted"+id);
      }
    )
  }

}
