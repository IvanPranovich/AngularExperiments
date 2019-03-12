import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableDemonstrationComponent } from './table-demonstration.component';

describe('TableDemonstrationComponent', () => {
  let component: TableDemonstrationComponent;
  let fixture: ComponentFixture<TableDemonstrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableDemonstrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableDemonstrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
