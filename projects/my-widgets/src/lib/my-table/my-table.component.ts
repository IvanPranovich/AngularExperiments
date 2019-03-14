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
  @Input() isEditMode: boolean;

  public rowData: any[];

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.rowData = this.getRowData();
  }

  getRowData(): any[] {
    const result = [];
    for (const item of this.dataSource.map((data, index) => ({ data, index}))) {
      const row = [];
      for (const column of this.columns) {
        const cellData = column.columnDataGetter(item.data, item.index);
        row.push(cellData);
      }
      result.push(row);
    }
    return result;
  }

  getMode(): string {
    if (this.isEditMode)
    {
      return 'Edit Mode';
    } else {
      return 'View Mode';
    }
  }

  cellValueChanged(rowNumber: number, colNumber: number, $event: any): void {
      console.log('TODO: Changed value' +rowNumber + colNumber + $event);
  }
}
