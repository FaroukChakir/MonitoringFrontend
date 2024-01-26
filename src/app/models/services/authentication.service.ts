import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Login } from '../login';
import { Register } from '../register';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { jwtAuth } from '../jwtauth';
import { ResuqestToken } from '../requestToken';
import { Monitoring } from '../SSH/Monitoring';
import { AddServer } from '../SSH/AddServer';
import { GetServers } from '../SSH/GetServers';
import { RemoveServer } from '../SSH/RemoveServer';
import { TestConnexion } from '../SSH/TestConnexion';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  // Authentication
  registerUrl="AuthManagement/Register"
  loginUrl="AuthManagement/Login"
  refreshTokenUrl="AuthManagement/refresh-token"
  
  /// SSH Management 
  addserverUrl = "/SshManagement/Addserver"
  removeserverUrl = "/SshManagement/RemoveServer"
  getserversUrl = "/SshManagement/GetServers"
  monitoringUrl = "/SshManagement/Monitoring"
  testconnexinUrl = "/SshManagement/TestConnexion"


  

  constructor(private http:HttpClient) {} 


  

  // Authentication
    public register(user:Register):Observable<jwtAuth>
    {
      return this.http.post<jwtAuth>(`${environment.apiUrl}/${this.registerUrl}`,user);
    }
    public login(user:Login):Observable<jwtAuth>
    {
      return this.http.post<jwtAuth>(`${environment.apiUrl}/${this.loginUrl}`,user);
    }
    public requestToken(token:ResuqestToken):Observable<jwtAuth>
    {
      return this.http.post<jwtAuth>(`${environment.apiUrl}/${this.refreshTokenUrl}`,token);
    }

    /// SSH Management 
    public AddServer(server: AddServer): Observable<AddServer> {
      return this.http.post<AddServer>(`${environment.apiUrl}/${this.addserverUrl}`, server);
    }
  
    public GetServers(): Observable<any> {
      return this.http.get<any>(`${environment.apiUrl}/${this.getserversUrl}`);
    }
  
    public RemoveServer(server: RemoveServer): Observable<any> {
      return this.http.post<any>(`${environment.apiUrl}/${this.removeserverUrl}`, server);
    }
  
    public TestConnexion(server: TestConnexion): Observable<any> {
      return this.http.post<any>(`${environment.apiUrl}/${this.testconnexinUrl}`, server);
    }
  
    public Monitoring(monitoring: Monitoring): Observable<Monitoring> {
      return this.http.post<Monitoring>(`${environment.apiUrl}/${this.monitoringUrl}`, monitoring);
    }
}
