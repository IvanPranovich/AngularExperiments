import { TestBed } from '@angular/core/testing';

import { MyWidgetsService } from './my-widgets.service';

describe('MyWidgetsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MyWidgetsService = TestBed.get(MyWidgetsService);
    expect(service).toBeTruthy();
  });
});
