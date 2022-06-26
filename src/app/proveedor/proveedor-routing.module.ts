import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsultarProveedoresComponent } from './pages/consultar-proveedores/consultar-proveedores.component';
import { CrearProveedorComponent } from './pages/crear-proveedor/crear-proveedor.component';
import { EditarProveedorComponent } from './pages/editar-proveedor/editar-proveedor.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {path: 'consultar-proveedores', component: ConsultarProveedoresComponent },
      {path: 'editar-proveedor', component: EditarProveedorComponent },
      {path: 'crear-proveedor', component: CrearProveedorComponent },
      {path: '**', redirectTo: 'consultar-proveedores'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProveedorRoutingModule { }
