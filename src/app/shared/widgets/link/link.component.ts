import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.scss']
})
export class LinkComponent implements OnInit {
  @Input() disable: boolean = false;
  @Output() onLinkClick = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  linkClick(event: any) {
    this.onLinkClick.emit(event);
  }

}
