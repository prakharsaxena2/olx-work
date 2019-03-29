import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { EmployeeService } from '../employee.service';
import { AuthenticateService} from '../authenticate.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  public bikes = [];
  constructor(private router:Router ,private router1:ActivatedRoute,private data:EmployeeService, public  authService:AuthenticateService) { }
  name:string
  ngOnInit() {
    this.data.getBikes().subscribe((data) => {
      Object.keys(data).forEach((key) => {
        this.bikes.push(data[key])
      });
    });

    this.adddata();
    let name1=this.router1.snapshot.paramMap.get('name')
    this.name=name1;
   
  }
  logout(): void {
    console.log("Logout");
    this.authService.logout();
    this.router.navigate(['/login']);
  }
  getProducts: any;
  adddata() {
    this.bikes = this.data.getproducts();
   

  }

}
