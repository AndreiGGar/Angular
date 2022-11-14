import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoublenumberComponent } from './doublenumber.component';

describe('DoublenumberComponent', () => {
  let component: DoublenumberComponent;
  let fixture: ComponentFixture<DoublenumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoublenumberComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoublenumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
