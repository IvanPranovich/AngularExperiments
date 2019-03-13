import { Component, OnInit } from '@angular/core';
import { AircraftScheduleService } from '../data-services/aircraft-schedule.service';
import { AircraftScheduleProxy } from '../data-services/aircraft-schedule';

@Component({
  selector: 'app-table-demonstration',
  templateUrl: './table-demonstration.component.html',
  styleUrls: ['./table-demonstration.component.css']
})
export class TableDemonstrationComponent implements OnInit {
  aircraftSchedules: AircraftScheduleProxy[] = [];

  constructor(private aircraftScheduleService: AircraftScheduleService) { }

  ngOnInit() {
    this.getAircraftSchedules();
  }

  getAircraftSchedules(): void {
    this.aircraftScheduleService.getAircraftSchedules()
      .subscribe(aircraftSchedules => this.aircraftSchedules = aircraftSchedules.slice(1, 2));
  }

}
