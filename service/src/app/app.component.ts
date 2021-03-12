import { Component } from "@angular/core";
import { IEmployee } from "./employee";
import { FormControl, FormGroup } from "@angular/forms";
import { MyserviceService } from "./myservice.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  employees: IEmployee[] = [];

  constructor(private mySer: MyserviceService) {}

  ngOnInit(): void{
    this.employees= this.mySer.getAllEmp();
  }
  //title = 'service';
}
