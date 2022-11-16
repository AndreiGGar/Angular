import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComicsaddComponent } from './comicsadd.component';

describe('ComicsaddComponent', () => {
  let component: ComicsaddComponent;
  let fixture: ComponentFixture<ComicsaddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComicsaddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComicsaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
