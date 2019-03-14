import { Input, Output, EventEmitter, OnInit, OnChanges } from '@angular/core';

export class MyTableCellComponent implements OnChanges {
    set currentValue(newValue: any) {
        this._currentValue = newValue;
        this.valueChanged();
    }
    get currentValue(): any {
        return this._currentValue;
    }

    @Input() initialValue: any;
    @Input() isReadOnly: boolean;
    @Output() valueChange = new EventEmitter();

    private _currentValue: any;

    ngOnChanges(): void {
        // Dirty fix for initial value
        this._currentValue = this.initialValue;
    }

    valueChanged() {
        this.valueChange.emit(this._currentValue);
    }
}