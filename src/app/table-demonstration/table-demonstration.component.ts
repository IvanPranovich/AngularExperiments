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
    new MyTableColumn('#', 'rowNumber', (data, index) => index + 1),
    new MyTableColumn('Reg No', 'text', (data: AircraftScheduleProxy) => data.registrationNumber),
    new MyTableColumn('Make/Model', 'text', (data: AircraftScheduleProxy) => data.aircraftModel.aircraftMake.name),
    new MyTableColumn('Use', 'text', (data: AircraftScheduleProxy) => data.registrationNumber),
    new MyTableColumn('Seats c/p', 'text', (data: AircraftScheduleProxy) => data.purposeOfUse.name),
    new MyTableColumn('TLO', 'text', (data: AircraftScheduleProxy) => data.crewSeats + '/' + data.passengerSeats),
    new MyTableColumn('Hull War', 'checkbox', (data: AircraftScheduleProxy) => data.hullCoverage.hullCoverageEnabled),
    new MyTableColumn('Hull Ccy', 'text', (data: AircraftScheduleProxy) => data.hullCoverage.currency.name),
    new MyTableColumn('Hull Value', 'text', (data: AircraftScheduleProxy) => data.hullCoverage.hullValue, true),
    new MyTableColumn('TLO Value', 'text', (data: AircraftScheduleProxy) => data.hullCoverage.tloLimit),
    new MyTableColumn('Hull Deduct', 'text', (data: AircraftScheduleProxy) => data.hullCoverage.hullDeductibleMonetaryAmount),
    new MyTableColumn('Hull War Deduct', 'text', (data: AircraftScheduleProxy) => data.hullCoverage.hullDeductiblePercentage),
    new MyTableColumn('Liab Ccy', 'text', (data: AircraftScheduleProxy) => data.liabilityCoverage.currency.name),
    new MyTableColumn('Liab Limit (CSL/TP/Pax)', 'text', (data: AircraftScheduleProxy) =>
      { data.liabilityCoverage.cslLimit, data.liabilityCoverage.thirdPartyLimit, data.liabilityCoverage.passengersLimit }),
    new MyTableColumn('PA Ccy', 'PA Limit (C/Pax)', (data: AircraftScheduleProxy) => data.personalAccidentCoverage.currency.name),
    new MyTableColumn('PA Limit (C/Pax)', 'PA Limit (C/Pax)', (data: AircraftScheduleProxy) => data.personalAccidentCoverage.crewLimit + '/' + data.personalAccidentCoverage.passengersLimit),
    new MyTableColumn('AVN 52E Limit', 'PA Limit (C/Pax)', (data: AircraftScheduleProxy) => data.aircraftModel.deductibleType),
    new MyTableColumn('LiabilityDeduct', 'PA Limit (C/Pax)', (data: AircraftScheduleProxy) => data.aircraftId),
  ];
  tableMode: string;
  private _isEditMode = false;

  constructor(private aircraftScheduleService: AircraftScheduleService) { }

  ngOnInit() {
    this.getAircraftSchedules();
    this.isEditMode = false;
  }

  getAircraftSchedules(): void {
    this.aircraftScheduleService.getAircraftSchedules()
      .subscribe(aircraftSchedules => this.aircraftSchedules = aircraftSchedules);
  }

  toggleEditMode(): void {
    this.isEditMode = !this.isEditMode;
  }

  get isEditMode(): boolean {
    return this._isEditMode;
  }

  set isEditMode(newState: boolean)
  {
    this._isEditMode = newState;
    if (this.isEditMode)
    {
      this.tableMode = 'Edit Mode';
    } else {
      this.tableMode = 'View Mode';
    }
  }
}
