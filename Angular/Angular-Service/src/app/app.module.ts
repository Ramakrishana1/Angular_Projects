import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CustomService } from './custom.service';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { EmployeeComponent } from './employee/employee.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    EmployeeComponent
  ],
  imports: [
    BrowserModule,HttpClientModule
  ],
  providers: [CustomService],
  bootstrap: [AppComponent]
})
export class AppModule { }
