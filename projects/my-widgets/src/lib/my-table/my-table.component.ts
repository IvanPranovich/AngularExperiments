import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { MyTableColumn } from './my-table-column';
import { Observable, Subject, of } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { MySearchboxComponent } from '../my-searchbox/my-searchbox.component';

@Component({
  selector: 'lib-my-table',
  templateUrl: './my-table.component.html',
  styleUrls: ['./my-table.component.css']
})
export class MyTableComponent implements OnInit, OnChanges {
  @Input() columns: MyTableColumn[];
  @Input() dataSource: any[];
  @Input() isEditMode: boolean;

  rowData: any[];
  displayRowData$: Observable<any[]>;
  isSearchCaption: boolean[];
  currentSearchTerms: { [id: number]: string; } = {};
  private searchTerms = new Subject<any>();

  search(term: string, colNumber: number): void {
    this.searchTerms.next({term, colNumber});
  }

  constructor() { }

  filterRowData(row: any): boolean {
    for (const colNumber in this.currentSearchTerms) {
      if (this.currentSearchTerms.hasOwnProperty(colNumber)) {
        const colSearchTerm = this.currentSearchTerms[colNumber];
        const cellData = row[colNumber].toString();
        try {
          const regExp = new RegExp(colSearchTerm);
          if (!regExp.test(cellData)) {
            return false;
          }
        } catch (e) { // It's not valid regular expression
          if (!cellData.includes(colSearchTerm)) {
            return false;
          }
        }
      }
    }
    return true;
  }

  tableDataService(term: any): Observable<any[]> {
    this.currentSearchTerms[term.colNumber] = term.term;
    const data = this.rowData.filter(row => this.filterRowData(row));
    return of(data);
  }


  ngOnInit() {
    this.displayRowData$ = this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: any) => this.tableDataService(term)),
    );
  }

  toggleSearchBox(column: number) {
    this.isSearchCaption[column] = !this.isSearchCaption[column];
    if (!this.isSearchCaption[column]) {
      this.search('', column);
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.rowData = this.getRowData();
    this.search('', 0);
    this.isSearchCaption = new Array<boolean>(this.rowData.length);
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

  tableValueChanged(rowNumber: number, colNumber: number, $event: any): void {
      console.log('TODO: Changed value' + rowNumber + colNumber + $event);
  }
}
