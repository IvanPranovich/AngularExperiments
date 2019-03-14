import { ColumnDataGetter } from './my-table-column-delegates';

export class MyTableColumn {
    constructor(public caption: string, public cellType: string, public columnDataGetter: ColumnDataGetter) {}
}