import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LockerList } from '../Models/LockerList';
import { Observable,Subject } from 'rxjs';

const httpOptions ={
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class LockerService {
  private apiUrl = "https://vabl-api.azurewebsites.net/lockerLists"
  private subject = new Subject<any>();
  public currentSemester = "" // <--- should be empty

  constructor(private http : HttpClient) {}

  getData() : Observable<LockerList[]>{
    return this.http.get<LockerList[]>(this.apiUrl)
  }

  updateLockerList(newList : LockerList):Observable<LockerList>{
    const url = `${this.apiUrl}/${newList.id}`
    console.log(newList)
    return this.http.put<LockerList>(url,newList,httpOptions)
  }

  addLockerList(newList : LockerList) : Observable<LockerList>{
    return this.http.post<LockerList>(this.apiUrl,newList,httpOptions)
  }
  
  deleteLockerList(id : string) : Observable<LockerList>{
    const url = `${this.apiUrl}/${id}`
    return this.http.delete<LockerList>(url)
  }

  setCurrentSemester(s : string): void{
    this.currentSemester = s
    this.subject.next(this.currentSemester)
  }
}
