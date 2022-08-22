import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ReplaySubject } from 'rxjs';
import { IEmployee } from 'src/app/Models/employee.interface';
import { EmployeeService } from 'src/app/services/EmployeeService/employee.services';

@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.component.html',
  styleUrls: ['./view-employee.component.css']
})
export class ViewEmployeeComponent implements OnInit {
  empCode:any;
  employee:IEmployee = {
    entry: '',
    FirstName: '',
    MiddleName: '',
    LastName: '',
    emailId: '',
    contactnumber: 0,
    Gender: 'Male',
    DateOfBirth: '',
    EmployeeType: 'Contract',
    Address: '',
    Pincode: '',
    actions: ''
  }
  constructor(private _routed:ActivatedRoute, private _list:EmployeeService, private _route:Router) { }

  ngOnInit(): void {
    let subject= new ReplaySubject(); 
       this.empCode = this._routed.snapshot.paramMap.get('id');
    this._list.getEmployeeListApi().subscribe((emp) => {
      this.employee = emp.find(e => e.entry == this.empCode) as IEmployee;   
      subject.next(this.employee);
      subject.complete();
    })
  }

  routeBack(){
    this._route.navigate(['/employee']);
  }

}
