import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/interfaces/employee';
import { ApiService } from 'src/app/services/api.service';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  public workPositon:any = [];
  public loading: boolean = false;
  public form: FormGroup;
  public id: string | null; 
  public title: string = 'Create';

  constructor(
    private _apiService: ApiService,
    private _fb: FormBuilder,
    private _employeeService: EmployeeService,
    private _router: Router,
    private _snackBar: MatSnackBar,
    private _activatedRoute: ActivatedRoute) {
    this.id = this._activatedRoute.snapshot.paramMap.get('id');
    this.form = this._fb.group({
      name: [{ value: '', disabled: false }, [Validators.required, Validators.pattern("[a-zA-Z][a-zA-Z ]+"), Validators.minLength(3)]],
      surname: [{ value: '', disabled: this.id ? true : false }, [Validators.required, Validators.pattern("[a-zA-Z][a-zA-Z ]+"), Validators.minLength(3)]],
      workPosition: [{ value: '', disabled: false }, Validators.required],
      date: [{ value: '', disabled: this.id ? true : false }, [Validators.required]]
    });
  }

  ngOnInit(): void {
    this.getWorkPosition();
    this.getEmployee();
  }

  getWorkPosition() {
    this._apiService.getWorkPosition('positions').subscribe(resp => {
      this.workPositon = resp;
    }, err => {
      console.log('show error message');
    });
  }

  addEditEmployee() {
    if (this.form.dirty && this.form.valid) {
      if (this?.id) {
        this.editEmployee(this.id);
      } else {
        this.addEmployee();
      }
    } else {
      this.alert('Invalid Form Data.');
    }
  }

  addEmployee() {
    let workPositionName = this.workPositon['positions'][this.form.value.workPosition];

    const employee: Employee = {
      name: this.form.value.name,
      surname: this.form.value.surname,
      workPosition: workPositionName,
      birthDay: this.form.value.date,
      idWorkPosition: this.form.value.workPosition,
    };

    this._employeeService.setEmployee(employee);
    this._router.navigate(['/admin']);
    this.alert(`The Employee ${this.form.value.name} has been added`);
  }

  editEmployee(id: string) {
    let idEmployee: number = Number(id);
    let workPositionName = this.workPositon['positions'][this.form.value.workPosition];
    console.log(this.form.getRawValue());

    const employee: Employee = {
      name: this.form.getRawValue().name,
      surname: this.form.getRawValue().surname,
      workPosition: workPositionName,
      birthDay: this.form.getRawValue().date,
      idWorkPosition: this.form.getRawValue().workPosition,
    };

    this._employeeService.updateEmployee(idEmployee, employee);
    this._router.navigate(['/admin']);
    this.alert(`The Employee ${this.form.value.name} has been edited`);

  }

  getEmployee() {
    if (this.id) {
      this.title = 'Edit';
      let employee: Employee;
      employee = this._employeeService.getEmployee(Number(this.id));
      this.setEditValuesFormControl(employee);
    }
  }

  setEditValuesFormControl(employee: Employee) {
    let workPositionValue = employee.idWorkPosition;
    this.loading = true;
    this.form.markAllAsTouched();
    this.form.markAsDirty();
    this.form.setValue({
      name: employee.name,
      surname: employee.surname,
      workPosition: workPositionValue?.toString(),
      date: employee.birthDay,
    });

    // TODO: Only for simulate loading, remove after add a real service request.
    setTimeout(() => {
      this.loading = false;
    }, 1000);
  }

  alert(message: string, action: string = '') {
    this._snackBar.open(message, action, {
      duration: 2500,
      horizontalPosition:'center',
      verticalPosition:'bottom'
    });
  }
}
