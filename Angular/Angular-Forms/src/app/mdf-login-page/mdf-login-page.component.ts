import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-mdf-login-page',
  templateUrl: './mdf-login-page.component.html',
  styleUrls: ['./mdf-login-page.component.css']
})
export class MdfLoginPageComponent implements OnInit {

  loginRef = new FormGroup({
    user:new FormControl(),
    pass:new FormControl()
  });
  result:string=" ";
  constructor() { }

  ngOnInit(): void {
  }

  checkUser(){
    let login = this.loginRef.value;
    console.log(login);
    let user = this.loginRef.value.user;
    let pass = this.loginRef.value.pass;
    if(user=="Raj" && pass=="123"){
        this.result = "Successfully Login";
    }else{
        this.result = "Failure!! Try Once Again";
    }
  }
  }


