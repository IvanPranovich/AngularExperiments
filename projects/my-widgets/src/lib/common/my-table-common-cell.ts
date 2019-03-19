import { Input, Output, EventEmitter, OnInit, OnChanges, SimpleChanges } from '@angular/core';

export class MyTableCommonCell implements OnChanges {
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

    ngOnChanges(changes: SimpleChanges): void {
        // Dirty fix for initial value
        this._currentValue = this.initialValue;
        if (changes.initialValue) {
            this._currentValue = changes.initialValue.currentValue;
        }
    }

    valueChanged(): void {
        this.valueChange.emit(this._currentValue);
    }
}