import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { MyTableColumn } from './my-table-column';
import { Observable, Subject, of } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { Compiler_compileModuleSync__POST_R3__ } from '@angular/core/src/linker/compiler';

@Component({
  selector: 'lib-my-table',
  templateUrl: './my-table.component.html',
  styleUrls: ['./my-table.component.css']
})
export class MyTableComponent implements OnInit, OnChanges {
  @Input() columns: MyTableColumn[];
  @Input() dataSource: any[];
  @Input() isEditMode: boolean;

  displayRowData$: Observable<any[]>;
  isSearchCaption: boolean[];
  private rowData: any[];
  private currentSearchTerms: { [id: number]: string; } = {};
  private isSortAscending = false;
  private sortingColumn = 0;
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
    const sortFunction = function(colNumber: number, isSortAscending: boolean, isNumeric: boolean) {
      const getSortingValue = function(item) {
        return isNumeric ? parseFloat(item) : String(item).toUpperCase();
      };
      return function (a: any[], b: any[]) {
        const value1 = getSortingValue(a[colNumber]);
        const value2 = getSortingValue(b[colNumber]);
        return ((value1 < value2) ? -1 : ((value1 > value2) ? 1 : 0) * (isSortAscending ? -1 : 1));
      };
    };
    if (term) {
      this.currentSearchTerms[term.colNumber] = term.term;
    }
    const data = this.rowData.filter(row => this.filterRowData(row))
      .sort(sortFunction(this.sortingColumn, this.isSortAscending, this.columns[this.sortingColumn].isNumeric));
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

  isSorting(colNumber: number) {
    return this.sortingColumn !== colNumber;
  }

  isSortAsc(colNumber: number) {
    return this.sortingColumn === colNumber && this.isSortAscending;
  }

  isSortDesc(colNumber: number) {
    return this.sortingColumn === colNumber && !this.isSortAscending;
  }

  sortClick(colNumber: number) {
    if (!colNumber || colNumber < 0 || colNumber >= this.columns.length) {
      return;
    }
    if (this.sortingColumn === colNumber) {
      this.isSortAscending = !this.isSortAscending;
    } else {
      this.sortingColumn = colNumber;
      this.isSortAscending = true;
    }
    this.searchTerms.next({undefined, colNumber});
  }

  tableValueChanged(rowNumber: number, colNumber: number, $event: any): void {
      console.log('TODO: Changed value' + rowNumber + colNumber + $event);
  }
}
