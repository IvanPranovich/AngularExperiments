import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyWidgetsComponent } from './my-widgets.component';

describe('MyWidgetsComponent', () => {
  let component: MyWidgetsComponent;
  let fixture: ComponentFixture<MyWidgetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyWidgetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyWidgetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
