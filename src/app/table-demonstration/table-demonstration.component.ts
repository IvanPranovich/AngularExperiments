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
    new MyTableColumn('Reg No', 'text', (data: AircraftScheduleProxy) => data.registrationNumber,
      (value, data, index) => data.registrationNumber = value),
    new MyTableColumn('Make/Model', 'text', (data: AircraftScheduleProxy) => data.aircraftModel.aircraftMake.name,
      (value, data, index) => data.aircraftModel.aircraftMake.name = value),
    new MyTableColumn('Use', 'text', (data: AircraftScheduleProxy) => data.purposeOfUse.name,
      (value, data, index) => data.purposeOfUse.name = value),
    new MyTableColumn('Seats c/p', 'text', (data: AircraftScheduleProxy) => data.crewSeats + '/' + data.passengerSeats,
      (value, data, index) => data.crewSeats = value), // TODO: setter
    new MyTableColumn('Hull War', 'checkbox', (data: AircraftScheduleProxy) => data.hullCoverage.hullCoverageEnabled,
      (value, data, index) => data.hullCoverage.hullCoverageEnabled = value),
    new MyTableColumn('TLO', 'checkbox', (data: AircraftScheduleProxy) => data.hullCoverage.tloCoverageEnabled,
      (value, data, index) => data.hullCoverage.tloCoverageEnabled = value),
    new MyTableColumn('Hull War', 'checkbox', (data: AircraftScheduleProxy) => data.hullCoverage.tloCoverageEnabled,
      (value, data, index) => data.hullCoverage.tloCoverageEnabled = value),
    new MyTableColumn('Hull Ccy', 'dropdown', (data: AircraftScheduleProxy) =>  data.hullCoverage.currency.name,
      (value, data, index) => data.hullCoverage.currency.name = value, false, false, ['USD', 'EUR', 'BYN']),
    new MyTableColumn('Hull Value', 'text', (data: AircraftScheduleProxy) => data.hullCoverage.hullValue,
      (value, data, index) => data.purposeOfUse.name = value, true, true),
    new MyTableColumn('TLO Value', 'text', (data: AircraftScheduleProxy) => data.hullCoverage.tloLimit,
      (value, data, index) => data.hullCoverage.tloLimit = value, true, true),
    new MyTableColumn('Hull Deduct', 'text', (data: AircraftScheduleProxy) => data.hullCoverage.hullDeductibleMonetaryAmount,
      (value, data, index) => data.hullCoverage.hullDeductibleMonetaryAmount = value),
    new MyTableColumn('Hull War Deduct', 'text', (data: AircraftScheduleProxy) => data.hullCoverage.hullDeductiblePercentage,
      (value, data, index) => data.hullCoverage.hullDeductiblePercentage = value),
    new MyTableColumn('Liab Ccy', 'text', (data: AircraftScheduleProxy) => data.liabilityCoverage.currency.name,
      (value, data, index) => data.liabilityCoverage.currency.name = value),
    new MyTableColumn('Liab Limit (CSL/TP/Pax)', 'text', (data: AircraftScheduleProxy) =>
      { data.liabilityCoverage.cslLimit, data.liabilityCoverage.thirdPartyLimit, data.liabilityCoverage.passengersLimit },
      (value, data, index) => data.liabilityCoverage.cslLimit = value), // TODO: setter
    new MyTableColumn('PA Ccy', 'dropdown', (data: AircraftScheduleProxy) => data.personalAccidentCoverage.currency.name,
      (value, data, index) => data.personalAccidentCoverage.currency.name, false, false, ['USD', 'EUR', 'BYN']),
    new MyTableColumn('PA Limit (C/Pax)', 'PA Limit (C/Pax)', (data: AircraftScheduleProxy) => 
      data.personalAccidentCoverage.crewLimit + '/' + data.personalAccidentCoverage.passengersLimit,
      (value, data, index) => data.personalAccidentCoverage.crewLimit = value), // TODO: setter
    new MyTableColumn('AVN 52E Limit', 'PA Limit (C/Pax)', (data: AircraftScheduleProxy) => data.aircraftModel.deductibleType,
      (value, data, index) => data.aircraftModel.deductibleType = value),
    new MyTableColumn('LiabilityDeduct', 'PA Limit (C/Pax)', (data: AircraftScheduleProxy) => data.aircraftId,
      (value, data, index) => data.aircraftId = value),
  ];
  tableMode: string;
  rowsPerPage = 5;
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

  setRowsPerPage(rowsPerPage: number) {
    this.rowsPerPage = rowsPerPage;
  }

  get isEditMode(): boolean {
    return this._isEditMode;
  }

  set isEditMode(newState: boolean) {
    this._isEditMode = newState;
    if (this.isEditMode)
    {
      this.tableMode = 'Switch to View Mode';
    } else {
      this.tableMode = 'Switch to Edit Mode';
    }
  }
}
