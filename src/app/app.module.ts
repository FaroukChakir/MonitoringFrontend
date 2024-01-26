import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { LoginRegisterComponent } from './components/login-register/login-register.component';
import { NgModel } from '@angular/forms';
import { MonitoringComponent } from './components/monitoring/monitoring.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginRegisterComponent,
    MonitoringComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
