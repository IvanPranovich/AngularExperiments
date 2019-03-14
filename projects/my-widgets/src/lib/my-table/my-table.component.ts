import { Component, OnInit, Input } from '@angular/core';
import { MyTableColumn } from './my-table-column';

@Component({
  selector: 'lib-my-table',
  templateUrl: './my-table.component.html',
  styleUrls: ['./my-table.component.css']
})
export class MyTableComponent implements OnInit {

  @Input() columns: MyTableColumn;
  @Input() dataSource: any[];

  constructor() { }

  ngOnInit() {
  }

}
