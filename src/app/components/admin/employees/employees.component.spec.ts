import { ComponentFixture, TestBed } from '@angular/core/testing';

// Custom components
import { EmployeesComponent } from './employees.component';

// Material 
import { MatSnackBarModule } from '@angular/material/snack-bar';


describe('EmployeesComponent', () => {
  let component: EmployeesComponent;
  let fixture: ComponentFixture<EmployeesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeesComponent ],
      imports: [ MatSnackBarModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
