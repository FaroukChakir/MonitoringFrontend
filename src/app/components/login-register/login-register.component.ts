import { Component } from '@angular/core';
import { AuthenticationService } from '../../models/services/authentication.service';
import { Register } from '../../models/register';
import { Login } from '../../models/login';
import {  Router } from '@angular/router';
import { jwtAuth } from '../../models/jwtauth';


@Component({
  selector: 'app-login-register',
  templateUrl: './login-register.component.html',
  styleUrls: ['./login-register.component.css']
})
export class LoginRegisterComponent {
  loginDto = new Login();
  registerDto = new Register();
  currentForm: string = 'login';
  jwtDto = new jwtAuth(); 

  constructor(private authService: AuthenticationService,private route: Router) {}

  toggleForm(form: string) {
    this.currentForm = form;
  }

  register() {
    this.authService.register(this.registerDto).subscribe();
  }

  login() {
    this.authService.login(this.loginDto).subscribe((jwtDto) => {
      localStorage.setItem("accesstoken", jwtDto.accessToken),
      localStorage.setItem("refreshToken", jwtDto.refreshToken)
    });
    this.route.navigate(["/Monitoring"]);
  }
}
