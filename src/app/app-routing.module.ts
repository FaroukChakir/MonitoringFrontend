import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginRegisterComponent } from './components/login-register/login-register.component';
import { AuthGuardService } from './Guard/AuthGuardService';
import { MonitoringComponent } from './components/monitoring/monitoring.component';


const routes: Routes = [
  { path: '', component: LoginRegisterComponent, canActivate: [AuthGuardService] },
  { path: 'Authentication', component: LoginRegisterComponent },
  { path: 'Monitoring', component: MonitoringComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }