import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplyForJobFormComponent } from './apply-for-job-form.component';

describe('ApplyForJobFormComponent', () => {
  let component: ApplyForJobFormComponent;
  let fixture: ComponentFixture<ApplyForJobFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplyForJobFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApplyForJobFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
