import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperadorSidebarComponent } from './operador-sidebar.component';

describe('OperadorSidebarComponent', () => {
  let component: OperadorSidebarComponent;
  let fixture: ComponentFixture<OperadorSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OperadorSidebarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OperadorSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
