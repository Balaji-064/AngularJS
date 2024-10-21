import { Component } from '@angular/core';
import { FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'forms';
  email=new FormControl('enter the email',[Validators.required,Validators.minLength(2),Validators.maxLength(10)]);
  constructor(){
    this.email.valueChanges.subscribe(data => {
      console.log(data)
    })
    this.email.statusChanges.subscribe(validOrInvalid =>{
      console.log(validOrInvalid)
    })
  }
  
  showEmailDetails(){
    console.log(this.email.errors);
    console.log(this.email.valid );

  }
}
