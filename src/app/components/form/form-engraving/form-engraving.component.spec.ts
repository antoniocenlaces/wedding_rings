import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEngravingComponent } from './form-engraving.component';

describe('FormEngravingComponent', () => {
  let component: FormEngravingComponent;
  let fixture: ComponentFixture<FormEngravingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormEngravingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormEngravingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
