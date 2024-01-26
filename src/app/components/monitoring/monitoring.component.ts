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
export class MonitoringComponent implements OnInit {
  removeserverDto = new RemoveServer();
  addserverDto = new AddServer();
  getserversDto = new GetServers();
  testconnexionDto = new TestConnexion();
  monitoringDto = new Monitoring();
  refreshtoken = new ResuqestToken();

  addServerResult: AddServer | null = null;
  removeServerResult: any | null = null;
  getServersResult: GetServers | null = null;
  testConnexionResult: any | null = null;
  monitoringResult: Monitoring | null = null;

  constructor(private authService: AuthenticationService,private route: Router) {}

  ngOnInit(): void {
    // You can call any initial API requests here if needed
  }

  callAddServerAPI() {
    this.authService.AddServer(this.addserverDto).subscribe(
      response => {
        this.addServerResult = response;
        console.log('Add Server API Response:', response);
        // Handle the response as needed
      },
      error => {
        console.error('Add Server API Error:', error);
        // Handle errors appropriately
      }
    );
  }

  callGetServersAPI() {
    this.authService.GetServers().subscribe(
      response => {
        this.getServersResult = response;
        console.log('Get Servers API Response:', response);
        // Handle the response as needed
      },
      error => {
        console.error('Get Servers API Error:', error);
        // Handle errors appropriately
      }
    );
  }

  callRemoveServerAPI() {
    this.authService.RemoveServer(this.removeserverDto).subscribe(
      response => {
        this.removeServerResult = response;
        console.log('Remove Server API Response:', response);
        // Handle the response as needed
      },
      error => {
        console.error('Remove Server API Error:', error);
        // Handle errors appropriately
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
        // Handle errors appropriately
      }
    );
  }

  callMonitoringAPI() {
    this.authService.Monitoring(this.monitoringDto).subscribe(
      response => {
        this.monitoringResult = response;
        console.log('Monitoring API Response:', response);
        // Handle the response as needed
      },
      error => {
        console.error('Monitoring API Error:', error);
        // Handle errors appropriately
      }
    );
  }
}

