import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocDontrolComponent } from './doc-dontrol.component';

describe('DocDontrolComponent', () => {
  let component: DocDontrolComponent;
  let fixture: ComponentFixture<DocDontrolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocDontrolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocDontrolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
