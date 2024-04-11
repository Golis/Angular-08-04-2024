import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../../models/employee';

@Injectable({
  providedIn: 'root'
})

export class MockService {

  constructor(private http: HttpClient) { }

  getEmployees(): Observable<any>{
    return this.http.get<Employee[]>('../../assets/fixtures/employees.json');
  }
}
