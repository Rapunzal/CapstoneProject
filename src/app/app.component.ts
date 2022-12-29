import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  str:string='';

  constructor(private router:Router){}

  searchMedicine(){
    console.log(this.str);

  this.router.navigate(['/search',this.str]);
  }
}
