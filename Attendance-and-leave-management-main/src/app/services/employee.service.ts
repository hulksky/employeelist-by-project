import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Employee } from '../models/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  //https://localhost:7103/api/
  private apiUrl = environment.apiBaseUrl + 'employees';

  private httpoptions = {
    headers: new HttpHeaders({'Content-Type':'application/json'})
  }
  constructor(private client: HttpClient) { }

  getEmpList(): Observable<Employee[]>{
    return this.client.get<Employee[]>(this.apiUrl);
  }

  add(emp:Employee):Observable<Employee>{
    return this.client.post<Employee>(this.apiUrl,emp, this.httpoptions);
  }

  delete(id:number):Observable<any>{
    return this.client.delete(`${this.apiUrl}/${id}`);
  }

  update(emp: Employee): Observable<any>{
    return this.client.put(`${this.apiUrl}/${emp.id}`,emp,this.httpoptions);
  }
  getListById(id:number):Observable<Employee>{
    return this.client.get<Employee>(`${this.apiUrl}/${id}`);
  }
}
