import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyTableComponent } from './my-table/my-table.component';
import { MyTableRowComponent } from './my-table-row/my-table-row.component';
import { MyTableCellComponent } from './my-table-cell/my-table-cell.component';
import { MyCheckboxComponent } from './my-checkbox/my-checkbox.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [MyTableComponent, MyTableRowComponent, MyTableCellComponent, MyCheckboxComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [MyTableComponent, MyTableRowComponent, MyTableCellComponent]
})
export class TableModule { }
