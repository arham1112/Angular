import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {

    log(x: any) 
    {
      console.log(x);
    }
    log1(y:any){
    console.log(y);
    }
    log2(z:any){
      console.log(z);
    }

    getData(loginForm: NgForm): void {
      console.log(loginForm.value);
    }


}
