import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Route, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(public fb: FormBuilder, public authService: AuthService, public router:Router, private _snackBar: MatSnackBar) {}

  public emailError?: string;
  public passwordError?: string;

  public loginForm = this.fb.group({
    email: ['', [Validators.email, Validators.required]],
    password: ['', [Validators.required]],
  });

  public submit() {
    const email = this.loginForm.get('email')?.value;
    const password = this.loginForm.get('password')?.value;

    if (email == 'feyza@gmail.com') {
      if (password == '123456') {
        this.authService.isLoggedIn = true;
        this.authService.name = 'Feyza Varol';
        this.authService.role = 'Full Access';
        this.authService.email = email;
        this.authService.password = password;
        localStorage.setItem('isLoggedIn', 'true');
        this.router.navigate(['/']);
      } else {
        this.passwordError = 'Password is incorrect';
        this._snackBar.open(this.passwordError, 'Close', {
          duration: 5000,
        });
      }
    } else if (email == 'ahmet@gmail.com') {
      if (password == '159753') {
        this.authService.isLoggedIn = true;
        this.authService.name = 'Ahmet Kaba';
        this.authService.role = 'Finance and Billing';
        this.authService.email = email;
        this.authService.password = password;
        localStorage.setItem('isLoggedIn', 'true');
        this.router.navigate(['/']);
      } else {
        this.passwordError = 'Password is incorrect';
        this._snackBar.open(this.passwordError, 'Close', {
          duration: 5000,
        });
      }
    } else {
      this.emailError = 'Email is incorrect';
      this._snackBar.open(this.emailError, 'Close', {
        duration: 5000,
      });
    }
  }
}
