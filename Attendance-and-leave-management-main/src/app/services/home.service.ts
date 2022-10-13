import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
//https://localhost:7103/api/
private apiUrl = environment.apiBaseUrl + 'home';

private httpoptions = {
  headers: new HttpHeaders({'Content-Type':'application/json'})
}
constructor(private client: HttpClient) { }

}
