import { Component, OnInit } from '@angular/core';
import { AircraftScheduleService } from '../data-services/aircraft-schedule.service';

@Component({
  selector: 'app-table-demonstration',
  templateUrl: './table-demonstration.component.html',
  styleUrls: ['./table-demonstration.component.css']
})
export class TableDemonstrationComponent implements OnInit {
  aircraftSchedules: AircraftScheduleModels.AircraftScheduleModel[] = [];

  constructor(private aircraftScheduleService: AircraftScheduleService) { }

  ngOnInit() {
    this.aircraftScheduleService.getAircraftSchedules();
  }

  getAircraftSchedules(): void {
    this.aircraftScheduleService.getAircraftSchedules()
      .subscribe(aircraftSchedules => this.aircraftSchedules = aircraftSchedules);
  }

}
