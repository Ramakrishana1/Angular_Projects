import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from './employee';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(public http: HttpClient) { }

  /*loadJsonData() {
    this.http.get("./assets/employees.json").
    subscribe(result=>console.log(result),
              error=>console.log(error),
              ()=>console.log("completed"));
  }*/

  loadJsonData() : Observable<Employee[]>{
    return this.http.get<Employee[]>("./assets/employees.json")
  }
}
