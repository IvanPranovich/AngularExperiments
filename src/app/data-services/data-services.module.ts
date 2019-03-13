import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AircraftScheduleService } from './aircraft-schedule.service';
import { SharedModule } from './../shared/shared.module';
import { LoggerService } from '../shared/logger.service';

@NgModule({
  declarations: [AircraftScheduleService],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [AircraftScheduleService],
  providers: [LoggerService]
})
export class DataServicesModule { }
