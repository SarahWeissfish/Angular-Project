import { Injectable } from "@angular/core";
import { CanActivate, mapToCanActivate } from "@angular/router";
import { Router } from "express";
@Injectable({
    providedIn:'root'
})
export class AutoGuardService implements CanActivate{
constructor(private _router:Router){}
    canActivate():boolean{
if(JSON.parse(sessionStorage.getItem('userData'))!=undefined)
   return true;
   else{
    this._router.navigate
   }
    }
}
