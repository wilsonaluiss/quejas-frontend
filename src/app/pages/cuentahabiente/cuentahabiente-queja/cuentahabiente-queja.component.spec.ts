import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuentahabienteQuejaComponent } from './cuentahabiente-queja.component';

describe('CuentahabienteQuejaComponent', () => {
  let component: CuentahabienteQuejaComponent;
  let fixture: ComponentFixture<CuentahabienteQuejaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuentahabienteQuejaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CuentahabienteQuejaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
