import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Visualizador3dComponent } from './visualizador3d.component';

describe('Visualizador3dComponent', () => {
  let component: Visualizador3dComponent;
  let fixture: ComponentFixture<Visualizador3dComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Visualizador3dComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Visualizador3dComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
