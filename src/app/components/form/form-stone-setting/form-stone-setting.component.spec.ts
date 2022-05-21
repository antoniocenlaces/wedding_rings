import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormStoneSettingComponent } from './form-stone-setting.component';

describe('FormStoneSettingComponent', () => {
  let component: FormStoneSettingComponent;
  let fixture: ComponentFixture<FormStoneSettingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormStoneSettingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormStoneSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
