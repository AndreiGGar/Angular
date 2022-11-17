import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployersofficeComponent } from './employersoffice.component';

describe('EmployersofficeComponent', () => {
  let component: EmployersofficeComponent;
  let fixture: ComponentFixture<EmployersofficeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployersofficeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployersofficeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
