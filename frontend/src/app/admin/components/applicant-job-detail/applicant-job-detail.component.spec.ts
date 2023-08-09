import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicantJobDetailComponent } from './applicant-job-detail.component';

describe('ApplicantJobDetailComponent', () => {
  let component: ApplicantJobDetailComponent;
  let fixture: ComponentFixture<ApplicantJobDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplicantJobDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApplicantJobDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
