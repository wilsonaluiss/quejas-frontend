import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuentahabienteDashboardComponent } from './cuentahabiente-dashboard.component';

describe('CuentahabienteDashboardComponent', () => {
  let component: CuentahabienteDashboardComponent;
  let fixture: ComponentFixture<CuentahabienteDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuentahabienteDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CuentahabienteDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
