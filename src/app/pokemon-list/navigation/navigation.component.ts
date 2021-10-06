import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  @Input() disablePreviousLink: boolean = false;
  @Input() disableNextLink: boolean = false;
  @Output() onPreviousClick = new EventEmitter();
  @Output() onNextClick = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onPrevious(event: any) {
    this.onPreviousClick.emit(event);
  }

  onNext(event: any) {
    this.onNextClick.emit(event);
  }

}
