import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { 
  title = 'routing';
  constructor(readonly router:Router){}
  onclickButtonClicked():void{
    this.router.navigateByUrl('firstChild')



  }
  onclickButton2Clicked():void{
    this.router.navigateByUrl('secondChild')
}
}