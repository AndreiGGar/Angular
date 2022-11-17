import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FunctionstemplateComponent } from './functionstemplate.component';

describe('FunctionstemplateComponent', () => {
  let component: FunctionstemplateComponent;
  let fixture: ComponentFixture<FunctionstemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FunctionstemplateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FunctionstemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
