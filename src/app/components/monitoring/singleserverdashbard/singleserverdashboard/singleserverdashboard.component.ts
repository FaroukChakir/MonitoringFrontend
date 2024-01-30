import { Component } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';
import { AuthenticationService } from '../../../../models/services/authentication.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { GetServers } from '../../../../models/SSH/GetServers';
import { ResuqestToken } from '../../../../models/requestToken';
import { jwtAuth } from '../../../../models/jwtauth';

@Component({
  selector: 'app-singleserverdashboard',
  templateUrl: './singleserverdashboard.component.html',
  styleUrls: ['./singleserverdashboard.component.css'],
})
export class SingleserverdashboardComponent {
  ngOnInit(): void {
   this.GetServers();
  }

  title: string = 'CPU';
  color: ThemePalette = 'primary';
  mode: ProgressSpinnerMode = 'determinate';
  value = 50;
  isLoading: boolean = false;
  servers: GetServers[] = [];
  Token: ResuqestToken = new ResuqestToken();
  serversList: { value: string; viewValue: string }[] = [];
  selectedServer:string = '';
  activeButton: string = 'CPU Monitoring';


  constructor(private authService: AuthenticationService, private router: Router) {}


  changeTitle(setTitle: string) {
    this.title = setTitle;
    this.activeButton = setTitle;
  }

  public GetServers() {
    this.Token.RefreshToken = localStorage.getItem('JwtRefreshToken') ?? '';
    this.Token.Token = localStorage.getItem('JwtAccessToken') ?? '';

    this.refreshtoken(this.Token);

    this.authService.GetServers().subscribe(
      (servers: GetServers) => {
        if (Array.isArray(servers)) {
          this.servers = servers;

          this.serversList = servers.map((server) => ({
            value: server.host_IP || '', 
            viewValue: server.host_IP || '',
          }));

          console.log('Server List:', this.serversList);
        } else {
          console.error('Invalid response format for servers');
        }
      },
      (error) => {
        console.error('Error fetching servers:', error);
      }
    );
  }

  refreshtoken(refreshtokenDto: ResuqestToken) {
    this.authService.requestToken(refreshtokenDto).subscribe(
      (jwtDto) => {
        localStorage.setItem('JwtAccessToken', jwtDto.accessToken);
        localStorage.setItem('JwtRefreshToken', jwtDto.refreshToken);
      },
      (error) => {
        this.router.navigate(['/Authentication']);
        // console.clear();
      }
    );
  }

  // Example function to simulate loading
  startLoading() {
    this.isLoading = true;

    setTimeout(() => {
      this.isLoading = false;
    }, 3000);
  }
}
