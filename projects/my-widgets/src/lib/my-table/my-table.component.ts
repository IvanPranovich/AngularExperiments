import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { MyTableColumn } from './my-table-column';
import { Observable, Subject, of } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap, filter, catchError } from 'rxjs/operators';
import { PagerService } from '../pager.service';

@Component({
  selector: 'lib-my-table',
  templateUrl: './my-table.component.html',
  styleUrls: ['./my-table.component.css']
})
export class MyTableComponent implements OnInit, OnChanges {
  @Input() columns: MyTableColumn[];
  @Input() dataSource: any[];
  @Input() isEditMode: boolean;
  @Input() rowsPerPage: number;

  pagedItems: any[];
  pager: any = {};
  isSearchCaption: boolean[];
  rowChanges: boolean[];
  cellChanges: [boolean[]];
  cellChangeValues: [any[]];
  private allPagedItems: any[];
  private rowData: any[];
  private currentSearchTerms: { [id: number]: string; } = {};
  private isSortAscending = false;
  private sortingColumn = 0;
  private searchTerms = new Subject<any>();
  private displayedRowData$: Observable<any[]>;
  private sortedRowData$: Observable<any[]>;

  constructor(private pagerService: PagerService) { }

  search(term: string, colNumber: number): void {
    this.searchTerms.next({term, colNumber});
  }

  filterRowData(row: any): boolean {
    for (const colNumber in this.currentSearchTerms) {
      if (this.currentSearchTerms.hasOwnProperty(colNumber)) {
        const colSearchTerm = this.currentSearchTerms[colNumber];
        if (row[colNumber]) {
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
        } else {
          return false;
        }
      }
    }
    return true;
  }

  tableDataService(term: any): Observable<any[]> {
    if (term && term.term) {
      this.currentSearchTerms[term.colNumber] = term.term;
    }
    const data = this.rowData.filter(row => this.filterRowData(row));
    return of(data);
  }

  sortDataService(data: any[]): Observable<any[]> {
    const sortFunction = function(colNumber: number, isSortAscending: boolean, isNumeric: boolean) {
      const getSortingValue = function(item) {
        return isNumeric ? parseFloat(String(item)) : String(item).toUpperCase();
      };
      return function (a: any[], b: any[]) {
        const value1 = getSortingValue(a[colNumber]);
        const value2 = getSortingValue(b[colNumber]);
        return ((value1 < value2) ? -1 : ((value1 > value2) ? 1 : 0) * (isSortAscending ? -1 : 1));
      };
    };
    const result = data.sort(sortFunction(this.sortingColumn, this.isSortAscending, this.columns[this.sortingColumn].isNumeric));
    return of(result);
  }

  ngOnInit() {
    this.displayedRowData$ = this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: any) => this.tableDataService(term)),
      catchError(err => {
        // TODO: inject logger and send message to it.
        console.log(err);
        return of([]);
      })
    );
    this.sortedRowData$ = this.displayedRowData$.pipe(
      switchMap((data: any) => this.sortDataService(data)),
    );
    this.sortedRowData$.subscribe(data => {
      this.allPagedItems = data;
      this.setPage(1);
    });
  }

  toggleSearchBox(column: number) {
    this.isSearchCaption[column] = !this.isSearchCaption[column];
    if (!this.isSearchCaption[column]) {
      this.search('', column);
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.rowData = this.getRowData();
    if (!this.isSearchCaption) {
      this.isSearchCaption = new Array<boolean>(this.rowData.length);
    } else {
      if (this.rowData && this.rowData.length !== this.isSearchCaption.length) {
        this.isSearchCaption = new Array<boolean>(this.rowData.length);
      }
    }
    if (this.rowData && this.columns && this.rowData.length > 0 && this.columns.length > 0 &&
      (!this.cellChanges || !this.cellChangeValues ||
        this.rowData.length !== this.cellChanges.length - 1 || this.columns.length !== this.cellChanges[0].length)) {
      this.cellChanges = [[]];
      this.cellChangeValues = [[]];
      for (let i = 0; i < this.rowData.length; i++) {
        const row = new Array<boolean>(this.columns.length);
        const rowValues = new Array<any>(this.columns.length);
        this.cellChanges.push(row);
        this.cellChangeValues.push(rowValues);
      }
    }
    if (!this.rowChanges) {
      this.rowChanges = new Array<boolean>(this.rowData.length);
    } else {
      if (this.rowData && this.rowData.length !== this.rowChanges.length) {
        this.rowChanges = new Array<boolean>(this.rowData.length);
      }
    }
    if (changes.rowsPerPage) {
      this.rowsPerPage = changes.rowsPerPage.currentValue;
    }
    if (changes.columns) {
      this.columns = changes.columns.currentValue;
      this.columns.unshift(new MyTableColumn('#', 'rowNumber', (data, index) => index + 1, null, true, true));
    }
    this.searchTerms.next();
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
    if (this.isEditMode) {
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
    if (colNumber < 0 || colNumber >= this.columns.length) {
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

  setPage(page: number) {
    if (page < 1 || page >= this.pager.totalPages){
      return;
    }

    this.pager = this.pagerService.getPager(this.rowData.length, page, this.rowsPerPage);
    this.pagedItems = this.allPagedItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
  }

  discardChanges(rowNumber: number) {
    this.rowChanges[rowNumber] = false;
    for (let i = 0; i < this.columns.length; i++) {
      this.rowChanges[rowNumber] = false;
    }
    this.searchTerms.next();
  }

  tableValueChanged(rowNumber: number, colNumber: number, $event: any): void {
    if (this.rowData[rowNumber][colNumber] !== $event) {
      this.cellChanges[rowNumber][colNumber] = true;
      this.cellChangeValues[rowNumber][colNumber] = $event;
    } else {
      this.cellChanges[rowNumber][colNumber] = false;
    }
    this.checkChangesInRow(rowNumber);
  }

  checkChangesInRow(rowNumber: number) {
    for (let i = 0; i < this.columns.length; i++) {
      if (this.cellChanges[rowNumber][i]) {
        this.rowChanges[rowNumber] = true;
        return;
      }
    }
    this.rowChanges[rowNumber] = false;
  }
}
