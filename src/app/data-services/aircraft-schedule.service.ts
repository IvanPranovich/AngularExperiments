import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { LoggerService } from '../shared/logger.service';
import { Logger } from 'typescript-logging';
import { AircraftScheduleProxy } from './aircraft-schedule';

@Injectable({
  providedIn: 'root'
})
export class AircraftScheduleService {
  private aircraftScheduleUrl = 'api/aircraftschedules';
  private logger: Logger;

  constructor(private http: HttpClient, private loggerFactory: LoggerService) {
    this.logger = loggerFactory.getLogger(AircraftScheduleService.name);
  }

  getAircraftSchedules (): Observable<AircraftScheduleProxy[]> {
    return this.http.get<AircraftScheduleProxy[]>(this.aircraftScheduleUrl)
      .pipe(
        tap(_ => this.logIncomingData(_)),
        catchError(this.handleError('getAircraftSchedules', [])));
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
