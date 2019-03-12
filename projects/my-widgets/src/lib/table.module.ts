import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyTableComponent } from './my-table/my-table.component';
import { MyTableRowComponent } from './my-table-row/my-table-row.component';
import { MyTableCellComponent } from './my-table-cell/my-table-cell.component';

@NgModule({
  declarations: [MyTableComponent, MyTableRowComponent, MyTableCellComponent],
  imports: [
    CommonModule
  ],
  exports: [MyTableComponent, MyTableRowComponent, MyTableCellComponent]
})
export class TableModule { }
