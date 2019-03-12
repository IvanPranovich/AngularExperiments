import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table/table.component';
import { TableRowComponent } from './table-row/table-row.component';
import { TableCellComponent } from './table-cell/table-cell.component';

@NgModule({
  declarations: [TableComponent, TableRowComponent, TableCellComponent],
  imports: [
    CommonModule
  ]
})
export class TableModule { }
