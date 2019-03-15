import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyTableDataComponent } from './my-table-cell.component';

describe('MyTableCellComponent', () => {
  let component: MyTableDataComponent;
  let fixture: ComponentFixture<MyTableDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyTableDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyTableDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
