import { Component } from '@angular/core';
import { LockerList } from 'src/app/Models/LockerList';
import { LockerService } from 'src/app/services/locker-service.service';
import { MatDialog } from '@angular/material/dialog';
import { AddOccupantPopupComponent } from 'src/app/components/add-occupant-popup/add-occupant-popup.component';
import { Locker } from 'src/app/Models/Locker';
import { RemoveOccupantPopupComponent } from 'src/app/components/remove-occupant-popup/remove-occupant-popup.component';
import { isEmpty } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DeleteListPopupComponent } from 'src/app/components/delete-list-popup/delete-list-popup.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.css']
})
export class DashboardPageComponent {
  LockerList : LockerList = {id:"",semester:"",l_list: []}
  dataSource! : Locker[]
  displayedCols = ['Locker Id','Occupant Name',"Phone","Email","Id","Add/Remove"]
  searchData: string = ""

  constructor(
    private lockerService : LockerService,
    private dialogRef : MatDialog,
    private snackBar: MatSnackBar,
    private router: Router,
    ){}
  
  ngOnInit():void {
    this.lockerService.getData().subscribe(data =>{
      const targetList = data.find(item => item.semester == this.lockerService.currentSemester)
      if(targetList !== undefined){
        this.LockerList = targetList
        this.dataSource = this.LockerList.l_list
      }
    })
  }

  openSnackBar(message: string,action:string){
    this.snackBar.open(message,action);
  }

  openDeleteList(){
    this.dialogRef.open(DeleteListPopupComponent,{
      width:'550',
      data: {semester:this.LockerList.semester}
    }).afterClosed().subscribe(isConfirmed =>{
      if(isConfirmed){
        this.lockerService.deleteLockerList(this.LockerList.id).subscribe(deletedList =>{
          this.router.navigate(['/semester-select'])
          this.openSnackBar(`${deletedList.id} was deleted`,"ok")
        })
      }
      this.openSnackBar(`Semester was deleted`,"ok")
    })
  }

  openAddOccupant(locker : Locker){
    this.dialogRef.open(AddOccupantPopupComponent,{
      width:'450',
      data: {locker : locker}
    }).afterClosed().subscribe(lockerDto =>{
      if(lockerDto !== undefined){
          //find target index
          let targetIndex = this.LockerList.l_list.findIndex(locker => locker.lockerId == lockerDto.lockerId)
          //Make coopy of datasource
          let newList = [...this.LockerList.l_list]
          //add new data to copy
          newList[targetIndex] = lockerDto
          //set main list == copy list
          this.LockerList.l_list = newList
          //set table datasource == copy list
          this.dataSource = newList
          //update database
          this.lockerService.updateLockerList(this.LockerList).subscribe((data)=>{})
          this.openSnackBar(`${lockerDto.occupant.name} added to ${lockerDto.lockerId}`,"ok")
      }
    })
  }

  openEmptyLocker(targetLocker:Locker){
    this.dialogRef.open(RemoveOccupantPopupComponent,{
      width:'450',
      data: {locker : targetLocker}
    }).afterClosed().subscribe(isEmpty =>{
      if(isEmpty){
        //find target index
        let targetIndex = this.LockerList.l_list.findIndex(locker => locker.lockerId == targetLocker.lockerId)
        //Make coopy of datasource
        let newList = [...this.LockerList.l_list]
        //add new data to copy
        newList[targetIndex].occupant = undefined
        //set main list == copy list
        this.LockerList.l_list = newList
        //set table datasource == copy list
        this.dataSource = newList
        //update database
        this.lockerService.updateLockerList(this.LockerList).subscribe((data)=>{})
        this.openSnackBar("Occupant removed","ok")
      }
    })
  }

  refresh(){
    this.dataSource = this.LockerList.l_list
    this.searchData = ""
  }


  search(target: string): void{
    const newList: LockerList = {id:"",semester:"Spring 2023",l_list: []}

    this.LockerList.l_list.forEach(locker =>{
      if(locker.lockerId.toLowerCase() === target.toLowerCase()){
        newList.l_list.push(locker)
      }else if(locker.occupant != undefined){

        if(locker.occupant.name.toLowerCase() === target.toLowerCase() 
          || locker.occupant.sid.toLowerCase() === target.toLowerCase())
        {
          newList.l_list.push(locker)
        }
      }

    })

    if(newList.l_list.length > 0){
      this.dataSource = newList.l_list
    }else{
      this.dataSource = this.LockerList.l_list
    }
    console.log(newList.l_list)
  }
}
