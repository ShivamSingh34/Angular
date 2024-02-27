import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {
   searchText:any = '';
   
   @Output()
   searchTextChanged: EventEmitter<string> = new EventEmitter<string>();

   // Raising the event

  //  onSearchTextChanged(){
    
  //  }

   setSearchText(inputEL:HTMLInputElement){
    console.log(inputEL.value);
    this.searchText = inputEL.value;
    this.searchTextChanged.emit(this.searchText);
   }
}
