import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDimensionsComponent } from './form-dimensions.component';

describe('FormDimensionsComponent', () => {
  let component: FormDimensionsComponent;
  let fixture: ComponentFixture<FormDimensionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormDimensionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormDimensionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
