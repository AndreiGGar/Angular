import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployerssalaryComponent } from './employerssalary.component';

describe('EmployerssalaryComponent', () => {
  let component: EmployerssalaryComponent;
  let fixture: ComponentFixture<EmployerssalaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployerssalaryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployerssalaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
