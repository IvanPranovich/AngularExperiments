import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyTableCellComponent } from './my-table-cell.component';

describe('MyTableCellComponent', () => {
  let component: MyTableCellComponent;
  let fixture: ComponentFixture<MyTableCellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyTableCellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyTableCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
