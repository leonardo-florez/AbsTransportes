import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
  title: string,
  body: string,
  options: string[]
}

@Component({
  selector: 'app-mat-dialog',
  templateUrl: './mat-dialog.component.html',
  styleUrls: ['./mat-dialog.component.css']
})
export class MatDialogComponent{
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {
    
  }
}
