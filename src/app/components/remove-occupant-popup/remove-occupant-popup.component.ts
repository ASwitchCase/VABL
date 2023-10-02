import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-remove-occupant-popup',
  templateUrl: './remove-occupant-popup.component.html',
  styleUrls: ['./remove-occupant-popup.component.css']
})
export class RemoveOccupantPopupComponent {
  constructor(
    public dialogRef: MatDialogRef<RemoveOccupantPopupComponent>,@Inject(MAT_DIALOG_DATA) public data : any){}

  onCancel(): void {
    this.dialogRef.close();
  }
}
