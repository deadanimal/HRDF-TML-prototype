import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepositoryComponent } from './depository.component';

describe('DepositoryComponent', () => {
  let component: DepositoryComponent;
  let fixture: ComponentFixture<DepositoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepositoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepositoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
