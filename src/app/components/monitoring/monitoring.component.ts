import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../models/services/authentication.service';
import { AddServer } from '../../models/SSH/AddServer';
import { GetServers } from '../../models/SSH/GetServers';
import { TestConnexion } from '../../models/SSH/TestConnexion';
import { Monitoring } from '../../models/SSH/Monitoring';
import { RemoveServer } from '../../models/SSH/RemoveServer';
import {  Router } from '@angular/router';
import { ResuqestToken } from '../../models/requestToken';


@Component({
  selector: 'app-monitoring',
  templateUrl: './monitoring.component.html',
  styleUrls: ['./monitoring.component.css']
})
export class MonitoringComponent {
  removeserverDto: RemoveServer = new RemoveServer();
  addserverDto: AddServer = new AddServer();
  getserversDto: GetServers = new GetServers();
  testconnexionDto: TestConnexion = new TestConnexion();
  monitoringDto: Monitoring = new Monitoring();
  refreshtokenDto: ResuqestToken = new ResuqestToken();

  addServerResult: AddServer | null = null;
  removeServerResult: any | null = null;
  getServersResult: GetServers | null = null;
  testConnexionResult: any | null = null;
  monitoringResult: Monitoring | null = null;

  constructor(private authService: AuthenticationService, private router: Router) {}

  ngOnInit(): void {
<<<<<<< HEAD
    var Tokens = new ResuqestToken();
    Tokens.Token = localStorage.getItem("JwtAccessToken") ?? '';
    Tokens.RefreshToken = localStorage.getItem("JwtRefreshToken") ?? '';
     this.refreshtoken(Tokens);
=======
>>>>>>> 9dbff5d5beda9254184915c28c5c31a2645b7ec7
  }

  refreshtoken(refreshtokenDto:ResuqestToken){
    this.authService.requestToken(refreshtokenDto).subscribe((jwtDto)=>{
      localStorage.setItem('JwtAccessToken',jwtDto.accessToken);
      localStorage.setItem('JwtRefreshToken',jwtDto.refreshToken);
    },error=>{
      this.router.navigate(['/Authentication']);
      console.clear();
    });
  }
  callAddServerAPI() {
    this.authService.AddServer(this.addserverDto).subscribe(
      response => {
        this.addServerResult = response;
        console.log('Add Server API Response:', response);
       
      },
      error => {
        console.error('Add Server API Error:', error);
<<<<<<< HEAD
        
        
=======
>>>>>>> 9dbff5d5beda9254184915c28c5c31a2645b7ec7
      }
    );
  }

  callGetServersAPI() {
    this.authService.GetServers().subscribe(
      response => {
        this.getServersResult = response;
        console.log('Get Servers API Response:', response);
      },
      error => {
        console.error('Get Servers API Error:', error);
      }
    );
  }

  callRemoveServerAPI() {
    this.authService.RemoveServer(this.removeserverDto).subscribe(
      response => {
        this.removeServerResult = response;
        console.log('Remove Server API Response:', response);
      },
      error => {
        console.error('Remove Server API Error:', error);
      }
    );
  }

  callTestConnexionAPI() {
    this.authService.TestConnexion(this.testconnexionDto).subscribe(
      response => {
        this.testConnexionResult = response;
        console.log('Test Connexion API Response:', response);
        // Handle the response as needed
      },
      error => {
        console.error('Test Connexion API Error:', error);
      }
    );
  }

  callMonitoringAPI() {
    this.authService.Monitoring(this.monitoringDto).subscribe(
      response => {
        this.monitoringResult = response;
        console.log('Monitoring API Response:', response);
<<<<<<< HEAD
       
      },
      error => {
        console.error('Monitoring API Error:', error);
        
=======
      },
      error => {
        console.error('Monitoring API Error:', error);
>>>>>>> 9dbff5d5beda9254184915c28c5c31a2645b7ec7
      }
    );
  }
}
