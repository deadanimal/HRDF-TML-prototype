import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlineCourseMainComponent } from './online-course-main.component';

describe('OnlineCourseMainComponent', () => {
  let component: OnlineCourseMainComponent;
  let fixture: ComponentFixture<OnlineCourseMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnlineCourseMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnlineCourseMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
