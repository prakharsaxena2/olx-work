import { Injectable } from '@angular/core';
import {Bike} from './bike'
import { HttpClient } from '@angular/common/http';
import { Employee } from './employee';
import { Observable } from 'rxjs';
import {myProducts} from '../productsdata'



@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private _url: string = 'https://angularfirebase-62dab.firebaseio.com/employees.json';
  private url2:string='https://angularfirebase-62dab.firebaseio.com/category/Bike.json';



  constructor(private http: HttpClient) { }
  getEmployees(): Observable<Employee[]> {

    return this.http.get<Employee[]>(this._url);
  }
  getBikes(): Observable<Bike[]> {

    return this.http.get<Bike[]>(this.url2);
  }
  getproducts(): any {
    return (myProducts);
  }
  setEmployee(empdata): Observable<Employee[]> {
    console.log(empdata);
    return this.http.post<Employee[]>(this._url, empdata);
  }
}
