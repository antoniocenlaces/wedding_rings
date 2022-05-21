import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPreciousMetalComponent } from './form-precious-metal.component';

describe('FormPreciousMetalComponent', () => {
  let component: FormPreciousMetalComponent;
  let fixture: ComponentFixture<FormPreciousMetalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormPreciousMetalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormPreciousMetalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
