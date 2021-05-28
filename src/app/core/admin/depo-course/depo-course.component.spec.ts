import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepoCourseComponent } from './depo-course.component';

describe('DepoCourseComponent', () => {
  let component: DepoCourseComponent;
  let fixture: ComponentFixture<DepoCourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepoCourseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepoCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
