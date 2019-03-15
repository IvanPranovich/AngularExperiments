import { Component, OnInit, Input } from '@angular/core';
import { MyTableCommonCell } from '../common/my-table-common-cell';

@Component({
  selector: 'lib-my-dropdown',
  templateUrl: './my-dropdown.component.html',
  styleUrls: ['./my-dropdown.component.css']
})
export class MyDropdownComponent extends MyTableCommonCell implements OnInit {
  @Input() dropdownValues: string[];

  constructor() {
    super();
  }

  ngOnInit() {
  }

}
