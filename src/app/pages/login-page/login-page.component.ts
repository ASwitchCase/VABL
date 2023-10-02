import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user-service.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  constructor(
    private userService : UserService,
    private router: Router,
    private snackBar: MatSnackBar
  ){}

  hide = true
  password : string = ""
  username : string = ""
  dataIsLoaded : boolean  = false

  ngOnInit(): void {
    this.userService.getUsers().subscribe(users =>{
      this.dataIsLoaded = true
    })
  }
    
  openSnackBar(message: string,action:string){
    this.snackBar.open(message,action);
  }

  login() : void{
    this.userService.getUsers().subscribe(users =>{
      let msg = "Username or password is incorrect"
      for(let x = 0; x < users.length; x++){
        if(users[x].password === this.password && users[x].username === this.username){
          this.router.navigate(['/semester-select'])
          msg = "Logged in"
          break
        }
      }
      this.openSnackBar(msg,"close")
    })
  }
}
