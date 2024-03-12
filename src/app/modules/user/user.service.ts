import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, retry } from "rxjs";
import {User} from "./user.model";





@Injectable()


export class UserService{
    constructor(private _http:HttpClient){}
    getUsersFromServer():Observable<User[]>{
        return this._http.get<User[]>("/api/Users");
    }
    getUserFromServer(id:number):Observable<User>{
        return this._http.get<User>(`/api/Users${id}`);
    }
    login(user:User):Observable<User>{
        return this._http.post<User>("/api/Users/login="+user.name,user)
    }
    logout(){
        sessionStorage.clear();
    }
    register(user:User):Observable<User>{
        return this._http.post<User>("/api/Users",user)
    }

}