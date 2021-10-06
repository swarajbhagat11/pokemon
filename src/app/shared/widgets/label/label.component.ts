import { Component, Input, OnInit } from '@angular/core';

import { FontSize } from '../../enums/font-size';
import { FontWeight } from '../../enums/font-weight';

@Component({
  selector: 'app-label',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.scss']
})
export class LabelComponent implements OnInit {

  @Input() fontSize: FontSize = FontSize.Medium;
  @Input() fontWeight: FontWeight = FontWeight.Normal;
  @Input() lineCount: number = 1;

  cssClass: string = '';

  constructor() {
  }

  ngOnInit(): void {
    let cssClassList = new Array<string>()
    switch (this.fontWeight) {
      case FontWeight.Light:
        cssClassList.push('label-fw-light');
        break;
      case FontWeight.Bold:
        cssClassList.push('label-fw-bold');
        break;
      default:
        cssClassList.push('label-fw-normal');
        break;
    }

    switch (this.fontSize) {
      case FontSize.Xsmall:
        cssClassList.push('label-fs-xsmall');
        break;
      case FontSize.Small:
        cssClassList.push('label-fs-small');
        break;
      case FontSize.Large:
        cssClassList.push('label-fs-large');
        break;
      case FontSize.Xlarge:
        cssClassList.push('label-fs-xlarge');
        break;
      default:
        cssClassList.push('label-fs-medium');
        break;
    }

    if(this.lineCount > 1) {
      cssClassList.push('label-multiline');
    }

    this.cssClass = cssClassList.join(' ');
  }

}
