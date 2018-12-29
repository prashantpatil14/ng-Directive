import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }
   isDisable:boolean;

   disable(){
    setTimeout(() => {     
    this.isDisable=true;
    console.log("2 sec");
    }, (2000));
  }
  ngOnInit() {
   
  }

}
