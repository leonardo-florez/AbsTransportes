import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Proveedor, ProveedorForm } from 'src/app/models/proveedor';
import { ProveedorService } from 'src/app/services/proveedor.service';
import { MatDialogComponent } from 'src/app/shared/others/mat-dialog/mat-dialog.component';

@Component({
  selector: 'app-consultar-proveedores',
  templateUrl: './consultar-proveedores.component.html',
  styleUrls: ['./consultar-proveedores.component.css']
})
export class ConsultarProveedoresComponent implements OnInit {

  displayedColumns: string[] = ['name', 'document', 'adress', 'email', 'vehicles', 'edit', 'delete'];
  dataSource: MatTableDataSource<ProveedorForm>;
  
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  proveedores: ProveedorForm[] = [];
  
  constructor(private proveedorService: ProveedorService, 
              public dialog: MatDialog,
              private router: Router) {
    this.dataSource = new MatTableDataSource(this.proveedores);
  }
  ngOnInit(): void {
    this.proveedorService.getProveedores().subscribe((resp: Proveedor[]) => {
      resp.forEach(proveedor => {
        this.proveedores.push(new ProveedorForm(proveedor))
      });
      this.dataSource = new MatTableDataSource(this.proveedores);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  
  openDialog(title: string, body: string, options: string[]) {
    const dialogRef = this.dialog.open(MatDialogComponent, {
      width: '15rem',
      data: {
        title: title,
        body: body,
        options: options
      },
    });

    dialogRef.afterClosed().subscribe(result => {
      if(!result){
        window.location.reload();
      }
    });
  }
  
  deleteProveedor(id: number){
    this.proveedorService.deleteProveedor(id).subscribe(resp => {
      this.openDialog("Proveedor Eliminado", "", ["Aceptar",""]);
    })
  }

  editProveedor(id: number){
    this.router.navigate(['/proveedor/editar-proveedor'], {queryParams: {id: id}});
  }

}
