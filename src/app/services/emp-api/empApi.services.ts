import { InMemoryDbService } from "angular-in-memory-web-api";


export class EmpApiService implements InMemoryDbService{
    createDb(){
        return { Employee:[] = [
            {entry:"1", FirstName:"Roshan", MiddleName: "", LastName: "Singh",emailId:"name@example.com", contactnumber:"1234567890",  Gender:"Male", DateOfBirth:"10/09/2000", EmployeeType:"Permanent", Address:"IND", Pincode:123456, actions:''},
            {entry:"2", FirstName:"Sunil", MiddleName: "Kumar", LastName: "Sen",emailId:"name@example.com", contactnumber:"1234567890",  Gender:"Male", DateOfBirth:"10/09/2000", EmployeeType:"Contract", Address:"IND", Pincode:637452, actions:''},
            {entry:"3", FirstName:"Sima", MiddleName: "Das", LastName: "Gupta",emailId:"name@example.com", contactnumber:"1234567890", Gender:"Female", DateOfBirth:"10/09/2000", EmployeeType:"Permanent", Address:"IND", Pincode:637112, actions:''},
            {entry:"4", FirstName:"Rohan", MiddleName: "", LastName: "Desai",emailId:"name@example.com", contactnumber:"1234567890",  Gender:"Male", DateOfBirth:"10/09/2000", EmployeeType:"Contract", Address:"IND", Pincode:476543, actions:''},
            {entry:"5", FirstName:"Rahim", MiddleName: "", LastName: "Sheikh",emailId:"name@example.com", contactnumber:"1234567890",  Gender:"Male", DateOfBirth:"10/09/2000", EmployeeType:"Permanent", Address:"IND", Pincode:567431, actions:''},
            {entry:"6", FirstName:"Srestha", MiddleName: "", LastName: "Rawat",emailId:"name@example.com", contactnumber:"1234567890",  Gender:"Female", DateOfBirth:"10/09/2000", EmployeeType:"Permanent", Address:"IND", Pincode:567455, actions:''},
            {entry:"7", FirstName:"Priti", MiddleName: "", LastName: "Singh",emailId:"name@example.com", contactnumber:"1234567890",  Gender:"Female", DateOfBirth:"10/09/2000", EmployeeType: "Contract", Address:"IND", Pincode:123546, actions:''},
            {entry:"8", FirstName:"Sunidhi", MiddleName: "", LastName: "Jaiswal",emailId:"name@example.com", contactnumber:"1234567890",  Gender:"Female", DateOfBirth:"10/09/2000", EmployeeType:"Permanent", Address:"IND", Pincode:342156, actions:''},
            {entry:"9", FirstName:"Rajesh", MiddleName: "Kumar", LastName: "Kundu",emailId:"name@example.com", contactnumber:"1234567890",  Gender:"Male", DateOfBirth:"10/09/2000", EmployeeType:"Permanent", Address:"IND", Pincode:637112, actions:''},
            {entry:"10", FirstName:"Raima", MiddleName: "", LastName: "Kaur",emailId:"name@example.com", contactnumber:"1234567890",  Gender:"Female", DateOfBirth:"10/09/2000", EmployeeType:"Contract", Address:"IND", Pincode:652189, actions:''},
    
        ]
    };
    }
    
}