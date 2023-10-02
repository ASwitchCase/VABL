import { Component } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-list-popup',
  templateUrl: './add-list-popup.component.html',
  styleUrls: ['./add-list-popup.component.css']
})
export class AddListPopupComponent {
  newSemesterName : string = ""
  constructor(public dialogRef: MatDialogRef<AddListPopupComponent>){}

  onCancel():void{
    this.newSemesterName =""
    this.dialogRef.close()
  }
}
