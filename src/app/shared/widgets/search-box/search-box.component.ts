import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss']
})
export class SearchBoxComponent implements OnInit {
  @Input() placeholder: string = 'Search';
  @Input() search: string = '';
  @Output() searchChange = new EventEmitter();
  @Output() onSearch = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  searchClick() {
    this.searchChange.emit(this.search);
    this.onSearch.emit();
  }

}
