import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyTextComponent } from './my-text.component';

describe('MyTextComponent', () => {
  let component: MyTextComponent;
  let fixture: ComponentFixture<MyTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
