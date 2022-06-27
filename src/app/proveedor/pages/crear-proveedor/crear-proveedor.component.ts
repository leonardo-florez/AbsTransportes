import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Proveedor } from 'src/app/models/proveedor';
import { ProveedorService } from 'src/app/services/proveedor.service';
import { MatDialog } from '@angular/material/dialog';
import { MatDialogComponent } from 'src/app/shared/others/mat-dialog/mat-dialog.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-proveedor',
  templateUrl: './crear-proveedor.component.html',
  styleUrls: ['./crear-proveedor.component.css']
})
export class CrearProveedorComponent implements OnInit {

  form: FormGroup;
  proveedor: Proveedor;

  constructor(private fb: FormBuilder, 
    private proveedorService: ProveedorService, 
    public dialog: MatDialog,
    private router: Router
    ) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      document: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(10)]],
      adress: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      vehicles: [ '', [Validators.required, Validators.max(100)]],
    });
   }

  ngOnInit(): void {
  }
  

  sendProveedor(){
    if(this.form.invalid){
      this.form.markAllAsTouched();
    }
    else {
      this.proveedor = new Proveedor(this.form.value);
      this.proveedorService.createProveedor(this.proveedor).subscribe(resp=>{
        this.openDialog();
      })
    }
  }

  openDialog() {
    const dialogRef = this.dialog.open(MatDialogComponent, {
      width: '25rem',
      data: {
        title: "Proveedor Creado Exitosamente",
        body: "¿Que acción desea realizar?",
        options: ["Crear Otro Proveedoor", "Ir a Consultas"]
      },
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.router.navigate(['/proveedor/consultar-proveedores'])
      }
      else{
        window.location.reload();
      }
    });
  }

  get name() {
    return this.form.get('name')!;
  }

  get document() {
    return this.form.get('document')!;
  }

  get adress() {
    return this.form.get('adress')!;
  }

  get email() {
    return this.form.get('email')!;
  }
  
  get vehicles() {
    return this.form.get('vehicles')!;
  }

}
