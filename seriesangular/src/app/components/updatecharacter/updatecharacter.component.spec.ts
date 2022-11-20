import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatecharacterComponent } from './updatecharacter.component';

describe('UpdatecharacterComponent', () => {
  let component: UpdatecharacterComponent;
  let fixture: ComponentFixture<UpdatecharacterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatecharacterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdatecharacterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
