import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  cakeName: string = '';
  cakeType: string = 'All';
  @Output() searchText: EventEmitter<string> = new EventEmitter<string>();
  searchInput() {
    // console.log(this.cakeName);
    this.searchText.emit(this.cakeName);
  }
}
