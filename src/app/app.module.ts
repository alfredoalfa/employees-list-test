import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Material Module
import { SharedModule } from './shared/shared.module';

//Custom Components
import { HomeComponent } from './components/home/home.component';

import { ApiService } from './services/api.service';
import { EmployeeService } from './services/employee.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule
  ],
  providers: [ ApiService, EmployeeService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
