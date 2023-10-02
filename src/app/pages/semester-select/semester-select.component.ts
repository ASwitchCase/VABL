import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LockerList } from 'src/app/Models/LockerList';
import { LockerService } from 'src/app/services/locker-service.service';
import { MatDialog } from '@angular/material/dialog';
import { AddListPopupComponent } from 'src/app/components/add-list-popup/add-list-popup.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-semester-select',
  templateUrl: './semester-select.component.html',
  styleUrls: ['./semester-select.component.css']
})
export class SemesterSelectComponent {
  lockerData : LockerList[] = []
  selected : string = ""

  constructor(
    private lockerService : LockerService,
    private router: Router,
    private dialogRef : MatDialog,
    private snackBar: MatSnackBar
    ){}
  

  openSnackBar(message: string,action:string){
    this.snackBar.open(message,action);
  }

  openAddSemester(){
    this.dialogRef.open(AddListPopupComponent,{
      width:'450px',
    }).afterClosed().subscribe(newSemesterName =>{
      if(newSemesterName !== undefined){
        let newList : LockerList = {id:"",semester:newSemesterName,l_list:[]}

        this.lockerData[0].l_list.forEach(locker => {
          if(locker.occupant !== undefined){
            locker.occupant = undefined
          }
          newList.l_list.push(locker)
        })
        this.lockerData.push(newList)
        this.lockerService.addLockerList(newList).subscribe(()=>{})
        this.openSnackBar(`${newList.semester} added`,"Ok")
      }
    })
  }
  ngOnInit(): void {
    this.lockerService.getData().subscribe((data)=>{
      this.lockerData = data
    })
  }
  select(){
    this.lockerService.setCurrentSemester(this.selected)
    this.router.navigate(['/dashboard'])
  }
}
