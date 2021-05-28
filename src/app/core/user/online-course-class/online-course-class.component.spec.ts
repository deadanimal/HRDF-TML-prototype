import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlineCourseClassComponent } from './online-course-class.component';

describe('OnlineCourseClassComponent', () => {
  let component: OnlineCourseClassComponent;
  let fixture: ComponentFixture<OnlineCourseClassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnlineCourseClassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnlineCourseClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
