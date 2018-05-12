import { Component } from '@angular/core';
import {FormControl} from "@angular/forms";

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  searchControl: FormControl = new FormControl(null);

  onSearch() {
    console.log(this.searchControl.value);
  }
    
}
