import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { LoginRegisterComponent } from './components/login-register/login-register.component';
import { MonitoringComponent } from './components/monitoring/monitoring.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { leftnavbarComponent } from './components/monitoring/navbars/leftnavbar/leftnavbar.component';
import { SingleserverdashboardComponent } from './components/monitoring/singleserverdashbard/singleserverdashboard/singleserverdashboard.component';
import { NgChartsModule } from 'ng2-charts';


// Import Angular Material modules
import { MatCardModule } from '@angular/material/card';
import { MatRadioModule } from '@angular/material/radio';
import { MatSliderModule } from '@angular/material/slider';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CpumonitorComponent } from './components/monitoring/CPUmonitoring/cpumonitor/cpumonitor.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginRegisterComponent,
    MonitoringComponent,
    leftnavbarComponent,
    SingleserverdashboardComponent,
    CpumonitorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatRadioModule,
    MatSliderModule,
    MatProgressSpinnerModule,
    NgChartsModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
