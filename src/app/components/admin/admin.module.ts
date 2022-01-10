import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';

// Material Module
import { SharedModule } from 'src/app/shared/shared.module';

//Custom Components
import { AdminComponent } from './admin.component';
import { NavbarComponent } from './navbar/navbar.component';

import { EmployeesComponent } from './employees/employees.component';
import { CreateEmployeeComponent } from './employees/create-employee/create-employee.component'


@NgModule({
  declarations: [
    AdminComponent,
    NavbarComponent,

    EmployeesComponent,
    CreateEmployeeComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule
  ]
})
export class AdminModule { }
