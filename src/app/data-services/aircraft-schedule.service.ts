import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { LoggerService } from '../shared/logger.service';
import { Logger } from 'typescript-logging';

@Injectable({
  providedIn: 'root'
})
export class AircraftScheduleService {
  private aircraftScheduleUrl = 'api/aircraftschedule';
  private logger: Logger;

  constructor(private http: HttpClient, private loggerFactory: LoggerService) {
    this.logger = loggerFactory.getLogger(AircraftScheduleService.name);
    this.logger.info('started!!!!');
  }

  getAircraftSchedules(): Observable<AircraftScheduleModels.AircraftScheduleModel[]> {
    return this.http.get<AircraftScheduleModels.AircraftScheduleModel[]>(this.aircraftScheduleUrl)
      .pipe(
        tap(model => this.logIncomingData(model),
        catchError(this.handleError<AircraftScheduleModels.AircraftScheduleModel>('getAircraftSchedules'))));
  }

  private logIncomingData(model: any): void {
    const data = JSON.stringify(model);
    this.logger.debug('new schedule: ' + data);
  }


  private log(message: string) {
    this.logger.info(message);
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      this.logger.error(operation, error);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
