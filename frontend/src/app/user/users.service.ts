import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UsersService {
  user: object;
  constructor(private http: HttpClient) { }

  register(user: object): Observable<any> {
    return this.http.post('http://localhost:3001/users/register', user)
  }
  getUserInfo(): Observable<any> {
    return this.http.get('http://localhost:3001/users/info', {
      headers: {
        authenticate: localStorage.getItem('authToken')
      }
    })
  }
  updateProfile(user): Observable<any> {
    return this.http.patch('http://localhost:3001/users/updateProfile', user, {
      headers: {
        authenticate: localStorage.getItem('authToken')
      }
    })
  }
  likeMovie(id: string): Observable<object> {
    return this.http.get(`http://localhost:3001/users/like/${id}`)
  }
}
