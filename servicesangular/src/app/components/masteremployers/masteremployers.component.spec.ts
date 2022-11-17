import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasteremployersComponent } from './masteremployers.component';

describe('MasteremployersComponent', () => {
  let component: MasteremployersComponent;
  let fixture: ComponentFixture<MasteremployersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MasteremployersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MasteremployersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
