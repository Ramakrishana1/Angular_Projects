import { Component, OnInit } from '@angular/core';
import { MyService } from '../my.service';
import { CustomService } from '../custom.service';
@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {
  msg1:string=" ";
  msg2:string=" ";
  constructor(public cser : CustomService) { }

  ngOnInit(): void {
  }
  fun1() : void {
    let ser = new MyService;
    this.msg1 = ser.sayHello();
  }
  fun2() : void {
    this.msg2 = this.cser.sayHello();
  }
}