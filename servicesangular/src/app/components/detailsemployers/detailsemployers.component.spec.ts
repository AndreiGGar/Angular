import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsemployersComponent } from './detailsemployers.component';

describe('DetailsemployersComponent', () => {
  let component: DetailsemployersComponent;
  let fixture: ComponentFixture<DetailsemployersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsemployersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsemployersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
