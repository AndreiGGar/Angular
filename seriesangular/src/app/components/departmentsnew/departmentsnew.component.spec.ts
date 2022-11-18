import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentsnewComponent } from './departmentsnew.component';

describe('DepartmentsnewComponent', () => {
  let component: DepartmentsnewComponent;
  let fixture: ComponentFixture<DepartmentsnewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepartmentsnewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DepartmentsnewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
