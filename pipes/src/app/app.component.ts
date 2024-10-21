import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pipes';
  day =new Date();
  num =234.67;
  num1=56.4;
  amount=90;
  obj={name:'gopi',age:26};
  arr=[1,2,3,4]
}
