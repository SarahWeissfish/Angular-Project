import { NgModule } from "@angular/core";
import { Route,RouterModule } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { LogoutComponent } from "./logout/logout.component";
import { RegisterComponent } from "./register/register.component";

const USER_ROUTES: Route[]=[
{path:"login",component:LoginComponent},
{path:"registr/:lecturer",component:RegisterComponent},
{path:"registr",component:RegisterComponent},
{path:"logout",component:LogoutComponent},

];

@NgModule({
imports:[RouterModule.forChild(USER_ROUTES)],
exports:[RouterModule]

})

export class UserRoutoingModule{}



