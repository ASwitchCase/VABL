import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-list-popup',
  templateUrl: './delete-list-popup.component.html',
  styleUrls: ['./delete-list-popup.component.css']
})
export class DeleteListPopupComponent {
  constructor(
    public dialogRef: MatDialogRef<DeleteListPopupComponent>,@Inject(MAT_DIALOG_DATA) public data : any){}

  onCancel(): void {
    this.dialogRef.close();
  }
}
