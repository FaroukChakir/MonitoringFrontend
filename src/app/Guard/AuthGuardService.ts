// auth-guard.service.ts
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthenticationService } from '../models/services/authentication.service';
import { jwtAuth } from '../models/jwtauth';
import { ResuqestToken } from '../models/requestToken';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
  constructor(private router: Router, private authService: AuthenticationService) {}

  canActivate(): boolean {
    const accessToken = localStorage.getItem('accesstoken');
    const refreshToken = localStorage.getItem('refreshToken');

    if (accessToken && refreshToken) {
      this.refreshToken(accessToken, refreshToken);
      this.router.navigate(["/Monitoring"]);
      return true;
    } else {
      this.router.navigate(['/Authentication']);
      return false;
    }
  }

  refreshToken(accessToken: string, refreshToken: string) {
    const refreshDto = new ResuqestToken();
    refreshDto.token = accessToken;
    refreshDto.refreshToken = refreshToken;

    this.authService.requestToken(refreshDto).subscribe(
      (jwtDto: jwtAuth) => {
        localStorage.setItem('accesstoken', jwtDto.accessToken);
        localStorage.setItem('refreshToken', jwtDto.refreshToken);
      },
      (error: any) => {
        console.error('Token refresh failed:', error);
        this.router.navigate(['/Authentication']);
      }
    );
  }
}
