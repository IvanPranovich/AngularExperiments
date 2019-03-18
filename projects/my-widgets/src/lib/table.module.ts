import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyTableComponent } from './my-table/my-table.component';
import { MyTableDataComponent } from './my-table-cell/my-table-cell.component';
import { MyCheckboxComponent } from './my-checkbox/my-checkbox.component';
import { FormsModule } from '@angular/forms';
import { MyTextComponent } from './my-text/my-text.component';
import { MyDropdownComponent } from './my-dropdown/my-dropdown.component';
import { PagerService } from './pager.service';

@NgModule({
  declarations: [MyTableComponent, MyTableDataComponent, MyCheckboxComponent, MyTextComponent, MyDropdownComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [MyTableComponent, MyTableDataComponent],
  providers: [PagerService],
})
export class TableModule { }
