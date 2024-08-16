import { Injectable } from '@angular/core';
import {AppUser} from "../model/user.model";
import {UUID} from "angular2-uuid";
import {Observable, of, throwError} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  users : AppUser[]=[];
  authenticatedUser : AppUser | undefined;
  constructor() {
    this.users.push({userId:UUID.UUID(),  username:"Adnane", password:"adn", roles:["ADMIN"]});
    this.users.push({userId:UUID.UUID(),  username:"Ahmed", password:"aaa", roles:["USER"]});
    this.users.push({userId:UUID.UUID(),  username:"Mourad", password:"mns", roles:["USER"]});

  }

  public login(nom : string , mdp : string) : Observable<AppUser>{
    let appUser = this.users.find(u=>u.username==nom);
    if (!appUser) return throwError(()=>new Error("Username or Password Error"));
    if(appUser.password!=mdp)return throwError(()=>new Error("Username or Password Error"));
    return of(appUser);
  }

  public authenticateUser(appUser : AppUser): Observable<boolean>{
    this.authenticatedUser=appUser;
    localStorage.setItem("authUser", JSON.stringify({username:appUser, roles:appUser, jwt:"JWT_TOKEN"}));
    return of(true);
  }

  public hasRole(role : string): boolean{
    return this.authenticatedUser!.roles.includes(role);

  }

  public isAuthenticated(){
    return this.authenticatedUser!=undefined;
  }


  public logout() : Observable<boolean> {
    this.authenticatedUser=undefined;
    localStorage.removeItem("authUser");
    return of(true);
  }
}

