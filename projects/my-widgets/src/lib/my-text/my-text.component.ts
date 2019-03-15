import { Component, OnInit } from '@angular/core';
import { MyTableCommonCell } from '../common/my-table-common-cell';

@Component({
  selector: 'lib-my-text',
  templateUrl: './my-text.component.html',
  styleUrls: ['./my-text.component.css']
})
export class MyTextComponent extends MyTableCommonCell implements OnInit {

  constructor() {
    super();
  }

  ngOnInit() {
  }

}
