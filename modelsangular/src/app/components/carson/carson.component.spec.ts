import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarsonComponent } from './carson.component';

describe('CarsonComponent', () => {
  let component: CarsonComponent;
  let fixture: ComponentFixture<CarsonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarsonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarsonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
