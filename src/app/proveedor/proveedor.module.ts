import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProveedorRoutingModule } from './proveedor-routing.module';
import { ConsultarProveedoresComponent } from './pages/consultar-proveedores/consultar-proveedores.component';
import { CrearProveedorComponent } from './pages/crear-proveedor/crear-proveedor.component';
import { EditarProveedorComponent } from './pages/editar-proveedor/editar-proveedor.component';
import { MaterialModule } from '../shared/material/material.module';


@NgModule({
  declarations: [
    ConsultarProveedoresComponent,
    CrearProveedorComponent,
    EditarProveedorComponent
  ],
  imports: [
    CommonModule,
    ProveedorRoutingModule,
    MaterialModule
  ],
  exports: [
    ConsultarProveedoresComponent,
    CrearProveedorComponent,
    EditarProveedorComponent
  ]
})
export class ProveedorModule { }
