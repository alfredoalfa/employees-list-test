import { Component, OnInit } from '@angular/core';
import { MatTableDataSource} from '@angular/material/table';
import { MatSnackBar} from '@angular/material/snack-bar';
import { Employee } from 'src/app/interfaces/employee';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  public listEmployees: Employee [] = [];

  public displayedColumns: string[] = ['id', 'name', 'surname', 'workPosition', 'birthDay', 'actions'];
  public dataSource!: MatTableDataSource<any>;

  constructor(
    private _employeeService: EmployeeService,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.getServiceEmployee();
  }

  getServiceEmployee() {
    this.listEmployees = this._employeeService.getEmployees();
    this.dataSource = new MatTableDataSource(this.listEmployees);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  removeEmployee(index: number) {
    this._employeeService.deleteEmployee(index);
    this.getServiceEmployee();
    this.alert(`${this.listEmployees[index].name} has been removed` );
  }

  remove(name: string, id: number) {
    if(confirm(`Are you sure to remove ${name}?`)) {
      this.removeEmployee(id);
    }
  }

  alert(message: string, action: string = 'Ok') {
    this._snackBar.open(message, action, {
      duration: 2000,
      horizontalPosition:'center',
      verticalPosition:'bottom'
    });
  }

}
