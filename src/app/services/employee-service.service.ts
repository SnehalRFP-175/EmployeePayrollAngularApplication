import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {
  id:Number = 0;
  employeeUp:any;
  constructor(private http:HttpClient,
    ) { }

  updateDataFunc(id:Number,employee:any){
    this.id = id;
    this.employeeUp = employee;
  }

  insertEmployee(employee : any){
    return this.http.post("http://localhost:9093/employeepayrollservice/create",employee);
  }
  getEmployee():Observable<object>{
    return this.http.get("http://localhost:9093/employeepayrollservice/getAll")
  }

  deleteEmployeeById(id :Number){
    return this.http.delete("http://localhost:9093/employeepayrollservice/delete/"+id)
  }

  updateById(id : Number,employee:any){
    return this.http.put("http://localhost:9093/employeepayrollservice/update/"+id,employee)
  }
}