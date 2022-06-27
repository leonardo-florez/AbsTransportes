import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-crear-proveedor',
  templateUrl: './crear-proveedor.component.html',
  styleUrls: ['./crear-proveedor.component.css']
})
export class CrearProveedorComponent implements OnInit {
  form: FormGroup;
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      identification: ['', Validators.required],
      adress: ['', Validators.required],
      email: ['', Validators.required],
      vehicles: [ 0, Validators.required],
    });
   }

  ngOnInit(): void {
  }

  get name() {
    return this.form.get('name')!;
  }

  get identification() {
    return this.form.get('identification')!;
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
