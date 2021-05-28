import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepoClassComponent } from './depo-class.component';

describe('DepoClassComponent', () => {
  let component: DepoClassComponent;
  let fixture: ComponentFixture<DepoClassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepoClassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepoClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
