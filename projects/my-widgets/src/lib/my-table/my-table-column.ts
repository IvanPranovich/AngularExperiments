import { ColumnDataGetter, ColumnDataSetter } from './my-table-column-delegates';

export class MyTableColumn {
    constructor(public caption: string, public cellType: string, public columnDataGetter: ColumnDataGetter,
        public columnDataSetter: ColumnDataSetter, public isReadOnly = false, public isNumeric = false,
        public additionalValues = null) {}
}
