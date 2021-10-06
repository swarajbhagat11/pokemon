import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DDOptions } from '../../interface';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {
  @Input() name: string = 'dropdown';
  @Input() id: string = 'dd';
  @Input() ddOptions: Array<DDOptions> = [];
  @Input() selectedValue: string = '';
  @Output() selectedValueChange = new EventEmitter();
  @Output() onSelect = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onChange() {
    this.selectedValueChange.emit(this.selectedValue);
    this.onSelect.emit();
  }

}
