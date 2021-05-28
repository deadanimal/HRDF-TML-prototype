import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepoTrainProvComponent } from './depo-train-prov.component';

describe('DepoTrainProvComponent', () => {
  let component: DepoTrainProvComponent;
  let fixture: ComponentFixture<DepoTrainProvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepoTrainProvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepoTrainProvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
