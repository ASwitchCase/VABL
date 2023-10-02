import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Locker } from 'src/app/Models/Locker';

@Component({
  selector: 'app-add-occupant-popup',
  templateUrl: './add-occupant-popup.component.html',
  styleUrls: ['./add-occupant-popup.component.css']
})
export class AddOccupantPopupComponent {

  lockerDto = {
    "lockerId": this.data.locker.lockerId,
    "occupant": {
        "name": "",
        "sid": "",
        "phone": "",
        "email": ""
    }
  }

  constructor(
    public dialogRef: MatDialogRef<AddOccupantPopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data : any,
  ){}

  onCancel(): void {
    this.dialogRef.close();
  }
}
