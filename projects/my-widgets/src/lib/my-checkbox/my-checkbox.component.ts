import { Component, OnInit } from '@angular/core';
import { MyTableCellComponent } from '../common/my-table-cell-component';

@Component({
  selector: 'lib-my-checkbox',
  templateUrl: './my-checkbox.component.html',
  styleUrls: ['./my-checkbox.component.css']
})
export class MyCheckboxComponent extends MyTableCellComponent implements OnInit {
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
