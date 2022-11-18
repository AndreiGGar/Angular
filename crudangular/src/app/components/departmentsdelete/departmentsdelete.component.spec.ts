import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentsdeleteComponent } from './departmentsdelete.component';

describe('DepartmentsdeleteComponent', () => {
  let component: DepartmentsdeleteComponent;
  let fixture: ComponentFixture<DepartmentsdeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepartmentsdeleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DepartmentsdeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
