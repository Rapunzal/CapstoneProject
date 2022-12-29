import { ActivatedRoute, Router } from '@angular/router';
import { UserServiceService } from './../user-service.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/user';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit{
user:User=
{
  id: 0,
  email: '',
  password: '',
  name: '',
  phone: ''
}
id:any;
constructor(private service:UserServiceService,private route:ActivatedRoute,private router:Router){}
  ngOnInit(): void {
    this.id=this.route.snapshot.paramMap.get('id')
    this.service.getUserById(this.id).subscribe(res=>{
      this.user=res;
      //  alert(this.id+"==> will be Updated");
      //  alert(this.user.id);
    })
  }

editUser(data:User)
{
  this.user=data;
    this.service.updateUser(this.user).subscribe(res=>{
        if(res!=null){
          alert("user updated")
        }else{
          alert("updation failed");
        }

    })
}


backtoMain(){
  this.router.navigate(['admin-page']);;
}

}
