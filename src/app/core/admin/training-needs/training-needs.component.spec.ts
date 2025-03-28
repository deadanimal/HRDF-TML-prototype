import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingNeedsComponent } from './training-needs.component';

describe('TrainingNeedsComponent', () => {
  let component: TrainingNeedsComponent;
  let fixture: ComponentFixture<TrainingNeedsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainingNeedsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainingNeedsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
