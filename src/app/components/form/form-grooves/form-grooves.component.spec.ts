import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormGroovesComponent } from './form-grooves.component';

describe('FormGroovesComponent', () => {
  let component: FormGroovesComponent;
  let fixture: ComponentFixture<FormGroovesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormGroovesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormGroovesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
