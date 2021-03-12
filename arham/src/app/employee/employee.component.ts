import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  firstname:string="Arham";
  lastname:string="Qamar";
  age:number=21;
  val: string = '';
  myFunction(): void{
    alert('Show an alert!');
  }

  constructor() { }

  ngOnInit(): void {
  }

}
