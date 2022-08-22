import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ReplaySubject } from 'rxjs';
import { IEmployee } from 'src/app/Models/employee.interface';
import { EmployeeService } from 'src/app/services/EmployeeService/employee.services';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {
  empCode:any;
  nan:number = NaN;
  employeeInfo:IEmployee ={
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
      this.employeeInfo = emp.find(e => e.entry == this.empCode) as IEmployee;   
      subject.next(this.employeeInfo);
      subject.complete();
    })
  }

  saveInfo(form:NgForm){
    if(form.valid){
      this.submit();
    }
  }

  submit(){
    this._route.navigate(['/employee']);
  }

}
