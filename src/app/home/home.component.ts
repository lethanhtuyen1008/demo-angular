import { Component, OnInit } from '@angular/core';
import { UserService, EmployeeService } from '../core';
import { CustomToastService } from '../core/services/custom-toast.service';
import { CustomBlockUIService } from '../core/services/custom-blockUI.service';
import { Employee } from '../core/models/employee.model';

@Component({
  selector: 'app-home-page',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(
    private userService: UserService,
    private customToastService: CustomToastService,
    private customBlockUIService: CustomBlockUIService,
    private employeeService: EmployeeService,
  ) {}

  employees: Employee[] = [];

  isAuthenticated: boolean;

  ngOnInit() {
    this.userService.isAuthenticated.subscribe((authenticated) => {
      this.isAuthenticated = authenticated;
    });
  }

  onClick() {
    this.customToastService.openToast({ message: 'open', title: 'Title', type: 'success' });
  }

  onBlockUI() {
    this.customBlockUIService.openBlockUI();

    this.employeeService
      .getListEmployee()
      .toPromise()
      .then((data) => {
        this.employees = data;
        this.customBlockUIService.closeBlockUI();
        this.customToastService.openToast({ message: 'Get list employee sucess', title: 'Success', type: 'success' });
      })
      .catch(() =>
        this.customToastService.openToast({ message: 'Get list employee failed!', title: 'Error', type: 'error' }),
      );
  }
}
