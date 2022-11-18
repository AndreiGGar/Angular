import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentseditComponent } from './departmentsedit.component';

describe('DepartmentseditComponent', () => {
  let component: DepartmentseditComponent;
  let fixture: ComponentFixture<DepartmentseditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepartmentseditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DepartmentseditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
