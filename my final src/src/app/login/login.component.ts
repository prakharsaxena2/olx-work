import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { NgForm } from '@angular/forms';
import { map } from 'rxjs/operators';
import {Router} from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public employee = [];

  constructor(private employeeservice: EmployeeService,private router: Router) 
  {}

  onSubmit(loginform: NgForm) {
    this.employee.forEach((key) => {
     if(loginform.value.email===key.email && loginform.value.password===atob(key.password))
     {
       console.log("Login Success");
       localStorage.setItem('isLoggedIn', "true");
       localStorage.setItem('token', loginform.value.email);
       this.router.navigate(['/Signin',key.name] );
    

     }
     
    });


  }


  ngOnInit() {
    console.log(localStorage.getItem('isLoggedIn'))
    localStorage.getItem('isLoggedIn') === 'true' && this.router.navigate(['/Signin','hh'])
    this.employeeservice.getEmployees().subscribe((data) => {
      Object.keys(data).forEach((key) => {
        this.employee.push(data[key]);
      });
    });

  }

}
