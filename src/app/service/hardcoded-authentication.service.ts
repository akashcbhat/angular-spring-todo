import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

  authenticate(username: string, password: string){
    if(username === "akash" && password === 'test'){
      if (isPlatformBrowser(this.platformId)) {
        sessionStorage.setItem('authenticaterUser', username);
      }
      return true;
    } else {
      return false;
    }
  }

  isUserLoggedIn(){
    if (isPlatformBrowser(this.platformId)) {
      let user = sessionStorage.getItem('authenticaterUser');
      return !(user === null);
    }
    return false;  // If it's server-side, consider the user not logged in
  }

  logout(){
    if (isPlatformBrowser(this.platformId)) {
      sessionStorage.removeItem('authenticaterUser');
    }
  }
}
