import { Component } from '@angular/core';

@Component({
  selector: 'app-notify',
  templateUrl: './notify.component.html',
  styleUrls: ['./notify.component.css']
})
export class NotifyComponent {
  displaynotify:boolean=false;
  closeNotification(){
    this.displaynotify=true
    
  }

}
