import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogComponent } from './others/mat-dialog/mat-dialog.component';
import { MaterialModule } from './material/material.module';



@NgModule({
  declarations: [
    MatDialogComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    MatDialogComponent
  ]
})
export class SharedModule { }
