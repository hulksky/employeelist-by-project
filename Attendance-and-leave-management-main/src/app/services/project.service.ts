import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Project } from '../models/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private apiUrl = environment.apiBaseUrl + 'projects';
  
  private httpoptions = {
    headers : new HttpHeaders({'Content-Type': 'application/json'})


  }


  constructor(private client : HttpClient) { }

  getList() : Observable<Project[]>{
    return this.client.get<Project[]>(this.apiUrl);

  }
  getById(id: number):Observable<Project>{
    return this.client.get<Project>(`${this.apiUrl}/${id}`);

  }
  add(proj : Project): Observable<Project>{
    return this.client.post<Project>(this.apiUrl,proj);
  }

  update(proj:Project):Observable<any>{
    return this.client.put<Project>(`${this.apiUrl}/${proj.id}`,proj, this.httpoptions);

  }
  delete(id:number):Observable<any>{
    return this.client.delete(`${this.apiUrl}/${id}`);
  }

}