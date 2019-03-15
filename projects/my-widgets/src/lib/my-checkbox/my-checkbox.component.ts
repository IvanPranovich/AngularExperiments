import { Component, OnInit } from '@angular/core';
import { MyTableCommonCell } from '../common/my-table-common-cell';

@Component({
  selector: 'lib-my-checkbox',
  templateUrl: './my-checkbox.component.html',
  styleUrls: ['./my-checkbox.component.css']
})
export class MyCheckboxComponent extends MyTableCommonCell implements OnInit {
  constructor() {
    super();
  }

  ngOnInit() {
  }

  isChecked(): string {
    if (this.currentValue || this.initialValue){
      return "checked";
    } else {
      return undefined;
    }
  }
}
