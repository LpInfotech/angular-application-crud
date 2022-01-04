import { Component, OnInit } from '@angular/core';
//import services
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  id:any;
  name:string;
  age:any;
  //gender:string;
  
  //call services in constructor
  constructor(private user:UserService) { 
     console.warn(user.getData());
     this.name= user.getData().name;
    
  }

  ngOnInit(): void {
  }

}
