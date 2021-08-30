import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../models/employee.model';
import { ApiService } from './api.service';

@Injectable()
export class EmployeeService {
  constructor(private apiService: ApiService) {}

  getListEmployee(): Observable<Employee[]> {
    return this.apiService.get('/employee').pipe((data) => data);
  }
}
