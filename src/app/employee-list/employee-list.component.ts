import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReplaySubject } from 'rxjs';
import { IEmployee } from '../Models/employee.interface';
import { EmployeeService } from '../services/EmployeeService/employee.services';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
//Sr No, FullName , EmailId, Contact Number,Action
  displayedColumns: string[] = ['entry', 'firstName', 'emailId', 'contactnumber', 'actions'];
  dataSource:IEmployee[] = [];
  constructor(private _DataList:EmployeeService, protected _router:Router) { }

  ngOnInit(): void {
    let subject= new ReplaySubject(); 
    this._DataList.getEmployeeListApi().subscribe((emp) => {
      this.dataSource = emp;
      subject.next(this.dataSource);
      subject.complete();
    })
  }

  viewClicked(emp:IEmployee){
    this._router.navigate(['/employee/view', emp.entry]);
  }
  editClicked(emp:IEmployee){
    this._router.navigate(['/employee/edit', emp.entry]);
  }
}
