import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarProveedoresComponent } from './consultar-proveedores.component';

describe('ConsultarProveedoresComponent', () => {
  let component: ConsultarProveedoresComponent;
  let fixture: ComponentFixture<ConsultarProveedoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultarProveedoresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultarProveedoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
