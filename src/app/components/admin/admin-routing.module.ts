import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { CreateEmployeeComponent } from './employees/create-employee/create-employee.component';
import { EmployeesComponent } from './employees/employees.component';


const routes: Routes = [
  {
    path: '', component: AdminComponent, children: [
      { path: '', component: EmployeesComponent },
      { path: 'create-employee', component: CreateEmployeeComponent },
      { path: 'edit-employee/:id', component: CreateEmployeeComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
