import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor(private http: HttpClient) { }

  register(user:object): Observable<any> {
    return this.http.post('http://localhost:3001/users/register', user)
  }
  login(){
    
  }
}
