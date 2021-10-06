import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Sort } from '../../enums/sort';

@Component({
  selector: 'app-sort-link',
  templateUrl: './sort-link.component.html',
  styleUrls: ['./sort-link.component.scss']
})
export class SortLinkComponent implements OnInit {

  @Input() sortType: Sort = Sort.Na;
  @Output() sortTypeChange = new EventEmitter();
  @Output() onSorting = new EventEmitter();

  Sort = Sort;

  constructor() { }

  ngOnInit(): void {
    let a = '';
  }

  onSort() {
    switch (this.sortType) {
      case Sort.Na:
        this.sortType = Sort.Asc;
        break;
      case Sort.Asc:
        this.sortType = Sort.Desc;
        break;
      case Sort.Desc:
        this.sortType = Sort.Na;
        break;
    }
    this.sortTypeChange.emit(this.sortType);
    this.onSorting.emit();
  }

}
