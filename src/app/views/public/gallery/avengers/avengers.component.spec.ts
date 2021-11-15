import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvengersComponent } from './avengers.component';

describe('AvengersComponent', () => {
  let component: AvengersComponent;
  let fixture: ComponentFixture<AvengersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvengersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AvengersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
