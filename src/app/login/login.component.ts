import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'

})
export class LoginComponent {

  constructor(private router: Router, private hardcodedAuthenticationService: HardcodedAuthenticationService){

  }
  username = "akash"
  password = ''
  invalidLogin = false
  errorMessage = 'Invalid Credentials'

  handleLogin(){
    console.log(this.username)
    if(this.hardcodedAuthenticationService.authenticate(this.username, this.password)){
      this.router.navigate(['welcome',this.username])
      this.invalidLogin = false
    }else{
      this.invalidLogin = true
    }
  }
}
