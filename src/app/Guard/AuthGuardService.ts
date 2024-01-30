// auth-guard.service.ts
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthenticationService } from '../models/services/authentication.service';
import { jwtAuth } from '../models/jwtauth';
import { ResuqestToken } from '../models/requestToken';
import { Observable, of , map , catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
  constructor(private router: Router, private authService: AuthenticationService) {}

  canActivate(): Observable<boolean> {
    const accessToken = localStorage.getItem('accesstoken');
    const refreshToken = localStorage.getItem('refreshToken');

    if (accessToken && refreshToken) {
      return this.refreshToken(accessToken, refreshToken);
    } else {
      this.router.navigate(['/Authentication']);
      return of(false);
    }
  }

  refreshToken(accessToken: string, refreshToken: string): Observable<boolean> {
    const refreshDto = new ResuqestToken();
    refreshDto.Token = accessToken;
    refreshDto.RefreshToken = refreshToken;

    return this.authService.requestToken(refreshDto).pipe(
      map((jwtDto: jwtAuth) => {
        localStorage.setItem('accesstoken', jwtDto.accessToken);
        localStorage.setItem('refreshToken', jwtDto.refreshToken);
        this.router.navigate(['/Monitoring']);
        return true;
      }),
      catchError((error: any) => {
        console.error('Token refresh failed:', error);
        this.router.navigate(['/Authentication']);
        return of(false);
      })
    );
  }
}
