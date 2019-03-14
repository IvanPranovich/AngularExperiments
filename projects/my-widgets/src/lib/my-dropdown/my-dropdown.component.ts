import { Component, OnInit, Input } from '@angular/core';
import { MyTableCellComponent } from '../common/my-table-cell-component';

@Component({
  selector: 'lib-my-dropdown',
  templateUrl: './my-dropdown.component.html',
  styleUrls: ['./my-dropdown.component.css']
})
export class MyDropdownComponent extends MyTableCellComponent implements OnInit {
  @Input() dropdownValues: string[];

  constructor() {
    super();
  }

  ngOnInit() {
  }

}
