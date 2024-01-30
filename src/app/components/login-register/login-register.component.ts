import { Component, NgZone } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { AuthenticationService } from '../../models/services/authentication.service';
import { Register } from '../../models/register';
import { Login } from '../../models/login';
import { Router } from '@angular/router';
import { jwtAuth } from '../../models/jwtauth';

@Component({
  selector: 'app-login-register',
  templateUrl: './login-register.component.html',
  styleUrls: ['./login-register.component.css'],
  animations: [
    trigger('slideUpDown', [
      state('void', style({ height: '0', opacity: '0' })),
      transition(':enter, :leave', [
        animate('0.3s ease-in-out')
      ]),
    ]),
  ],
})
export class LoginRegisterComponent {
  loginDto = new Login();
  registerDto = new Register();
  currentForm: string = 'login';
  jwtDto = new jwtAuth();
  errorMessage: string = '';
  successMessage: string = '';
  errorTimeoutId: any;
  successTimeoutId: any;

  constructor(
    private authService: AuthenticationService,
    private route: Router,
    private zone: NgZone // Import NgZone
  ) {}

  toggleForm(form: string) {
    this.currentForm = form;
    this.errorMessage = '';
    this.successMessage = '';
  }

  register() {
    if (!this.registerDto.user_Login || !this.registerDto.user_Password) {
      this.errorMessage = 'Both username and password are required.';
      this.setErrorMessageTimeout();
      return;
    }

    this.authService.register(this.registerDto).subscribe(
      () => {
        this.successMessage = 'Account created successfully.';
        this.setSuccessMessageTimeout();
        this.currentForm="login"
      },
      (error: jwtAuth) => {
        this.errorMessage = error.error;
        this.setErrorMessageTimeout();
      }
    );
  }

  login() {
    if (!this.loginDto.user_Login || !this.loginDto.user_Password) {
      this.errorMessage = 'Both username and password are required.';
      this.setErrorMessageTimeout();
      return;
    }

    this.authService.login(this.loginDto).subscribe(
      (jwtDto) => {
        localStorage.setItem('JwtAccessToken', jwtDto.accessToken);
        localStorage.setItem('JwtRefreshToken', jwtDto.refreshToken);
        this.route.navigate(['/Monitoring']);
      },
      (error: jwtAuth) => {
        this.errorMessage = error.error;
        this.setErrorMessageTimeout();
      }
    );
  }

  setErrorMessageTimeout() {
    clearTimeout(this.errorTimeoutId);
    this.errorTimeoutId = setTimeout(() => {
      this.zone.run(() => {
        this.errorMessage = '';
      });
    }, 2500);
  }

  setSuccessMessageTimeout() {
    clearTimeout(this.successTimeoutId);
    this.successTimeoutId = setTimeout(() => {
      this.zone.run(() => {
        this.successMessage = '';
      });
    }, 2500);
  }
}
