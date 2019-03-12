import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyTableRowComponent } from './my-table-row.component';

describe('MyTableRowComponent', () => {
  let component: MyTableRowComponent;
  let fixture: ComponentFixture<MyTableRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyTableRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyTableRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
