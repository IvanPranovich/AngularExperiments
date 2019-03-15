import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'lib-my-table-cell',
  templateUrl: './my-table-cell.component.html',
  styleUrls: ['./my-table-cell.component.css']
})
export class MyTableDataComponent implements OnInit {
  @Input() cellType: string;
  @Input() additionalValues: any;
  @Input() initialValue: any;
  @Input() isReadOnly: boolean;
  @Input() isEditMode: boolean;
  @Output() cellValueChange = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  cellValueChanged($event: any): void {
      this.cellValueChange.emit($event);
  }
}
