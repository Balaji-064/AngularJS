import { Component } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {
  searchValue:string=""
  changeValue(eventdata:Event){
    
  console.log((<HTMLInputElement>eventdata.target).value)
   this.searchValue=((<HTMLInputElement>eventdata.target).value)
  }

}