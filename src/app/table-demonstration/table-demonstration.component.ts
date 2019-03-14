import { Component, OnInit } from '@angular/core';
import { AircraftScheduleService } from '../data-services/aircraft-schedule.service';
import { AircraftScheduleProxy } from '../data-services/aircraft-schedule';
import { MyTableColumn } from 'projects/my-widgets/src/lib/my-table/my-table-column';

@Component({
  selector: 'app-table-demonstration',
  templateUrl: './table-demonstration.component.html',
  styleUrls: ['./table-demonstration.component.css']
})
export class TableDemonstrationComponent implements OnInit {
  aircraftSchedules: AircraftScheduleProxy[] = [];
  columns: MyTableColumn[] = [
    new MyTableColumn('#', 'rowNumber', ''),
    new MyTableColumn('Reg No', 'text', ''),
    new MyTableColumn('Make/Model', 'text', ''),
    new MyTableColumn('Use', 'text', ''),
    new MyTableColumn('Seats c/p', 'text', ''),
    new MyTableColumn('TLO', 'text', ''),
    new MyTableColumn('Hull War', 'text', ''),
    new MyTableColumn('Hull Ccy', 'text', ''),
    new MyTableColumn('Hull Value', 'text', ''),
    new MyTableColumn('TLO Value', 'text', ''),
    new MyTableColumn('Hull Deduct', 'text', ''),
    new MyTableColumn('Hull War Deduct', 'text', ''),
    new MyTableColumn('Liab Ccy', 'text', ''),
    new MyTableColumn('Liab Limit (CSL/TP/Pax)', 'text', ''),
    new MyTableColumn('PA Ccy', 'PA Limit (C/Pax)', ''),
    new MyTableColumn('PA Limit (C/Pax)', 'PA Limit (C/Pax)', ''),
    new MyTableColumn('AVN 52E Limit', 'PA Limit (C/Pax)', ''),
    new MyTableColumn('LiabilityDeduct', 'PA Limit (C/Pax)', ''),
  ];

  constructor(private aircraftScheduleService: AircraftScheduleService) { }

  ngOnInit() {
    this.getAircraftSchedules();
  }

  getAircraftSchedules(): void {
    this.aircraftScheduleService.getAircraftSchedules()
      .subscribe(aircraftSchedules => this.aircraftSchedules = aircraftSchedules);
  }

}
