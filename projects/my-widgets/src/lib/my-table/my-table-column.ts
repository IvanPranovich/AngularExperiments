import { ColumnDataGetter } from './my-table-column-delegates';

export class MyTableColumn {
    constructor(public caption: string, public cellType: any, public columnDataGetter: ColumnDataGetter) {}
}