import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

  
  public get name() : string {
    return localStorage.getItem('name') || '';
  }

  // set name
  public set name(v : string) {
    localStorage.setItem('name', v);
  }
  

  public get email() : string {
    return localStorage.getItem('email') || '';
  }

  // set email
  public set email(v : string) {
    localStorage.setItem('email', v);
  }

  public password = '';
  
  public get role() : string {
    return localStorage.getItem('role') || '';
  }

  // set role

  public set role(v : string) {
    localStorage.setItem('role', v);
  }

  constructor() { }
}
