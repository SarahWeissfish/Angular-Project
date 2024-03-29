

import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { User } from '../user.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
u:User=JSON.parse(sessionStorage.getItem('userData'))||undefined;
loginForm:FormGroup=new FormGroup({});
constructor(private _userService:UserService,private _router:Router,private _actr:ActivatedRoute){}
ngOnInit():void{
this.loginForm=new FormGroup({
"userName":new FormControl("",[Validators.required,Validators.minLength(3)]),
"password":new FormControl("",[Validators.required,Validators.minLength(3),Validators.pattern("^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,12}$")])
})
}

login(){
  this.u=new User();
  this.u.name=this.loginForm.controls["userName"].value;
  this.u.password=this.loginForm.controls["password"].value;
  this._userService.login(this.u).subscribe(x=>
    {
      if (x != undefined&&x.id>0)
        { sessionStorage.setItem('userData', JSON.stringify(x));
          alert(JSON.parse(sessionStorage.getItem('userData')).name + " hello")
          this._router.navigate(["courses"]);
        }
        else if (x == undefined) {
          alert("אינך רשום במערכת ")
          sessionStorage.setItem('name',this.u.name );
          this._router.navigate(["register"])
        }
        else {
          alert("סיסמא שגויה")
        }


        
    })




}



}
