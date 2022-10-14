import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Employee } from '../models/employee';
import { Leave } from '../models/leave';

@Injectable({
  providedIn: 'root'
})
export class LeaveService {

    //https://localhost:7103/api/
    private apiUrl = environment.apiBaseUrl + 'leaves';

private httpoptions = {
      headers: new HttpHeaders({'Content-Type':'application/json'})
    }

  constructor(private client:HttpClient) { }

  getLeaveList(): Observable<Leave[]>{
    return this.client.get<Leave[]>(this.apiUrl);
  }

  add(proj:Leave):Observable<Leave>{
    return this.client.post<Leave>(this.apiUrl,proj,this.httpoptions);
  }
}
