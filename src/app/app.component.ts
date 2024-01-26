import { Component } from '@angular/core';
import { Login } from './models/login';
import { Register } from './models/register';
import { ResuqestToken } from './models/requestToken';
import { AuthenticationService } from './models/services/authentication.service';
import { jwtAuth } from './models/jwtauth';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'monitoring-app-frontend';
  loginDto = new Login();
  registerDto = new Register();
  refreshtokenDto = new ResuqestToken();
  jwtDto = new jwtAuth();

  constructor(private authservice:AuthenticationService){}

  register(registerDto:Register){
    this.authservice.register(registerDto).subscribe();
  }
  login(loginDto:Login){
    this.authservice.login(loginDto).subscribe((jwtDto)=>{
      localStorage.setItem('JwtAccessToken',jwtDto.accessToken);
      localStorage.setItem('JwtRefreshToken',jwtDto.refreshToken);
    });
  }
  refreshtoken(refreshtokenDto:ResuqestToken){
    this.authservice.requestToken(refreshtokenDto).subscribe((jwtDto)=>{
      localStorage.setItem('JwtAccessToken',jwtDto.accessToken);
      localStorage.setItem('JwtRefreshToken',jwtDto.refreshToken);
    });
  }

}
