import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CvariableComponent } from './cvariable.component';

describe('CvariableComponent', () => {
  let component: CvariableComponent;
  let fixture: ComponentFixture<CvariableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CvariableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CvariableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
