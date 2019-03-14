import { Component, OnInit } from '@angular/core';
import { MyTableCellComponent } from '../common/my-table-cell-component';

@Component({
  selector: 'lib-my-text',
  templateUrl: './my-text.component.html',
  styleUrls: ['./my-text.component.css']
})
export class MyTextComponent extends MyTableCellComponent implements OnInit {

  constructor() {
    super();
  }

  ngOnInit() {
  }

}
