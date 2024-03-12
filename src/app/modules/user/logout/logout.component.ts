import { Component } from '@angular/core';
import { UserService } from '../user.service';
import{Router} from '@angular/router'
import Swal from 'sweetalert2';

@Component({
  selector: 'app-logout',
  standalone: true,
  imports: [],
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.css'
})
export class LogoutComponent {
constructor(private _usrSrvc:UserService,private _router:Router)
{
this._usrSrvc.logout();
Swal.fire({
  position:"top",
  icon:"success",
  title:"good bye",
  showConfirmButton: false,
  timer: 800
})
this._router.navigate(["home"]);
}
}
