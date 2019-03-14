import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { MyTableColumn } from './my-table-column';

@Component({
  selector: 'lib-my-table',
  templateUrl: './my-table.component.html',
  styleUrls: ['./my-table.component.css']
})
export class MyTableComponent implements OnInit, OnChanges {
  @Input() columns: MyTableColumn[];
  @Input() dataSource: any[];

  public rowData: any[];

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.rowData = this.getRowData();
  }

  getRowData(): any[] {
    const result = [];
    for (const data of this.dataSource) {
      const row = [];
      for (const column of this.columns) {
        const cellData = column.columnDataGetter(data);
        row.push(cellData);
      }
      result.push(row);
    }
    return result;
  }

}
