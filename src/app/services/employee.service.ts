import { Injectable } from '@angular/core';
import { Employee } from '../interfaces/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private listEmployees: Employee[] = [
    { name: 'Jhon', surname: 'Doe', workPosition: 'full-stack developer', birthDay: "1999-11-11", idWorkPosition: 0 },
    { name: 'Tiger', surname: 'Nixon', workPosition: 'sw admin', birthDay: "1999-11-11", idWorkPosition: 2 },
    { name: 'Garrett', surname: 'Winters', workPosition: 'front-end developer', birthDay: "1999-11-11", idWorkPosition: 1 },
    { name: 'Ashton', surname: 'Cox', workPosition: 'sw admin', birthDay: "1999-11-11", idWorkPosition: 2 },
    { name: 'Cedric', surname: 'Kelly', workPosition: 'full-stack developer', birthDay: "1999-11-11", idWorkPosition: 0 },
    { name: 'Williamson', surname: 'Brielle', workPosition: 'front-end developer', birthDay: "1999-11-11", idWorkPosition: 1 },
    { name: 'Rhona', surname: 'Davidson', workPosition: 'full-stack developer', birthDay: "1999-11-11", idWorkPosition: 0 },
    { name: 'Hurst', surname: 'Colleen', workPosition: 'scrum master', birthDay: "1999-11-11", idWorkPosition: 4 },
    { name: 'Kennedy', surname: 'Marshall', workPosition: 'scrum master', birthDay: "1999-11-11", idWorkPosition: 4 },
  ];

  constructor() { }

  getEmployees() {
    return this.listEmployees.slice();
  }

  getEmployee(id: number) {
    return this.listEmployees[id];
  }

  setEmployee(employee: Employee) {
    this.listEmployees.unshift(employee);
  }

  updateEmployee(id:number, employee:Employee) {
    this.listEmployees[id] = employee;
  }

  deleteEmployee(index: number) {
    this.listEmployees.splice(index, 1)
  }
}
