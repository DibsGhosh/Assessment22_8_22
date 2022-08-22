import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { IEmployee } from "src/app/Models/employee.interface";



@Injectable()

export class EmployeeService{
    
    employeeUrl = 'api/Employee'

    constructor(private _http:HttpClient){

    }
    getEmployeeListApi(): Observable<IEmployee[]>{
        return this._http.get<IEmployee[]>(this.employeeUrl);
    }
}