import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Attendance } from '../models/attendance';

@Injectable({
  providedIn: 'root'
})
export class AttendanceService {
  private apiUrl=environment.apiBaseUrl+'Attendances';
  private httpOptions={headers:new HttpHeaders({'Content-type':'application/json'})}

  constructor(private client : HttpClient) { }
  getList():Observable<Attendance[]>{
    return this.client.get<Attendance[]>(this.apiUrl)
  }
  getById(id:number): Observable<Attendance>{
    return this.client.get<Attendance>(`${this.apiUrl}/${id}`);
  }
  add(att:Attendance):Observable<Attendance>{
    return this.client.post<Attendance>(this.apiUrl,att,this.httpOptions);
}
delete(id:number):Observable<any>{
  return this.client.delete<Attendance>(`${this.apiUrl}/${id}`);
}
update(att:Attendance):Observable<any>{
  return this.client.put<Attendance>(`${this.apiUrl}/${att.id}`,att,this.httpOptions);
}
}