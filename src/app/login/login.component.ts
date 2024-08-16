import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {AuthenticationService} from "../services/authentication.service";
import {dateTimestampProvider} from "rxjs/internal/scheduler/dateTimestampProvider";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  userFormGroup! : FormGroup;
  errMessage : any;
  constructor(private fb : FormBuilder,
              private authService : AuthenticationService,
              private router : Router,
              ) {
  }

  ngOnInit(): void {
    this.userFormGroup=this.fb.group({
      username : this.fb.control(""),
      password : this.fb.control(""),
    })

  }

  handleLogin() {
    let userNAME=this.userFormGroup.value.username ;
    let passWORD=this.userFormGroup.value.password ;
    this.authService.login(userNAME, passWORD).subscribe({
      next:(appUser)=>{
        this.authService.authenticateUser(appUser).subscribe({
          next:(data)=>{
            this.router.navigateByUrl("/connect/home")
          }
        });

      },
      error :(err)=>{
        this.errMessage=err;

      }
    })

  }
}
