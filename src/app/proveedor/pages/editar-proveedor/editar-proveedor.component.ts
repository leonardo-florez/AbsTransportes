import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Proveedor, ProveedorForm } from 'src/app/models/proveedor';
import { ProveedorService } from 'src/app/services/proveedor.service';
import { MatDialogComponent } from 'src/app/shared/others/mat-dialog/mat-dialog.component';

@Component({
  selector: 'app-editar-proveedor',
  templateUrl: './editar-proveedor.component.html',
  styleUrls: ['./editar-proveedor.component.css']
})
export class EditarProveedorComponent implements OnInit {
  
  form: FormGroup;
  proveedor: ProveedorForm;

  constructor(private route: ActivatedRoute,
    private fb: FormBuilder,
    private proveedorService: ProveedorService,
    public dialog: MatDialog,
    private router: Router
  ) {
    this.form = this.fb.group({
      id: [''],
      name: ['', Validators.required],
      document: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(10)]],
      adress: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      vehicles: ['', [Validators.required, Validators.max(100)]],
    });
  }

  ngOnInit(): void {
    this.route.queryParams
      .subscribe(params => {
        this.proveedorService.getProveedores().subscribe((resp: Proveedor[]) => {
          this.form.patchValue(new ProveedorForm(resp.filter(x => x.Id_Proveedor == params.id)[0]));
        });
      }
      );
  }

  editProveedor(){
    if(this.form.invalid){
      this.form.markAllAsTouched();
    }
    else {
      this.proveedorService.editProveedor(new Proveedor(this.form.value)).subscribe(resp=>{
        this.openDialog();
      })
    }
  }

  openDialog() {
    const dialogRef = this.dialog.open(MatDialogComponent, {
      width: '25rem',
      data: {
        title: "Proveedor Actualizado Exitosamente",
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
