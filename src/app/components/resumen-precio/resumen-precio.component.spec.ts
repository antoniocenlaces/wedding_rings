import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumenPrecioComponent } from './resumen-precio.component';

describe('ResumenPrecioComponent', () => {
  let component: ResumenPrecioComponent;
  let fixture: ComponentFixture<ResumenPrecioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ResumenPrecioComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumenPrecioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
