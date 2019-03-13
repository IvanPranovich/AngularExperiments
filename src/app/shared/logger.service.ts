import { Injectable } from '@angular/core';
import { factory } from './../logging/config-log4j';
import { Logger } from 'typescript-logging';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  constructor() { }

  getLogger(name: string): Logger {
    return factory.getLogger(name);
  }
}
