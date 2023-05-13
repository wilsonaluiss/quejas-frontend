import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuentahabienteSidebarComponent } from './cuentahabiente-sidebar.component';

describe('CuentahabienteSidebarComponent', () => {
  let component: CuentahabienteSidebarComponent;
  let fixture: ComponentFixture<CuentahabienteSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuentahabienteSidebarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CuentahabienteSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
