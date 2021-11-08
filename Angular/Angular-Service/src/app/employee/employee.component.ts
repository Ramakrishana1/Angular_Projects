import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  employees:Array<Employee>=[];
  flag:boolean = false;
  constructor(public empSer: EmployeeService) { }

  ngOnInit(): void {
  }

  loadJson() {
    this.flag = true;
    this.empSer.loadJsonData().subscribe(result=>console.log(result),
                                        error=>console.log(error),
                                        ()=>console.log("completed"));
  }

}
