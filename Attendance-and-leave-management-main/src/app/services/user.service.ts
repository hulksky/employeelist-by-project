import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LoginDto } from '../models/login-dto';
import { Role } from '../models/role';
import { User } from '../models/user';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiUrl = environment.apiBaseUrl + 'Users';
  private httpOptions = {
    headers : new HttpHeaders({'Content-Type' : 'application/json'})
  }
  constructor(private client:HttpClient) { }

  changePassowrd(user:User):Observable<User>{
    console.log(user.id);
    return this.client.put<User>(`${this.apiUrl}/${user.id}`,user,this.httpOptions)
  }

  register(user:User):Observable<User>{
    return this.client.post<User>(this.apiUrl,user,this.httpOptions);
  }

  login(user:User):Observable<LoginDto>{
    let login = this.client.post<LoginDto>(`${this.apiUrl}/login`,user,this.httpOptions);
    login.subscribe(result => {
      localStorage.setItem('UserInfo',JSON.stringify(result));
    },err =>{
      console.log(err);
      return null;
    })
    
    return login;
  }

  getList():Observable<User[]>{
    return this.client.get<User[]>(this.apiUrl);
  }
  getListById(id:number):Observable<User>{
    return this.client.get<User>(`${this.apiUrl}/${id}`);
  }

  isEmpLoggedIn():boolean{
    var values = JSON.parse(localStorage.getItem('UserInfo') || '{}');    
    if(values.designation == 2) return true;
    return false;
  }

  isManLoggedIn():boolean{
    var values = JSON.parse(localStorage.getItem('UserInfo') || '{}');    
    if(values.designation == 1) return true;
    return false;
  }

  isLoggedIn():boolean{
    if(localStorage.getItem('UserInfo') == null) return false;
      return true;
  
  }
  getUser():LoginDto{
    return JSON.parse(localStorage.getItem('UserInfo') || '{}');
  
  }
  logout(){
    localStorage.removeItem('UserInfo');
  }

}
