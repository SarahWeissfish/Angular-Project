import { NgModule } from "@angular/core";


import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { LeadingComment } from "@angular/compiler";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { LogoutComponent } from "./logout/logout.component";
import { RegisterComponent } from "./register/register.component";
import { UserService } from "./user.service";
import { UserRoutoingModule } from "./user-routing.module";
@NgModule({
    declarations:[LoginComponent,RegisterComponent, LogoutComponent],
    imports:[CommonModule,FormsModule,ReactiveFormsModule,HttpClientModule,RouterModule,UserRoutoingModule],
    providers:[UserService],
    exports:[LoginComponent,RegisterComponent,LogoutComponent]
 })
 
export class UserModule{}