import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UsersService {
  user: object;
  baseApiUrl=process.env.NODE_ENV==="production"
   ? "https://pelisback.herokuapp.com"
   :"http://localhost:3001"
  constructor(private http: HttpClient) { }

  register(user: object): Observable<any> {
    return this.http.post(this.baseApiUrl + '/users/register', user)
  }
  getUserInfo(): Observable<any> {
    return this.http.get(this.baseApiUrl + '/users/info', {
      headers: {
        authenticate: localStorage.getItem('authToken')
      }
    })
  }
  updateProfile(user): Observable<any> {
    return this.http.patch(this.baseApiUrl + '/users/updateProfile', user, {
      headers: {
        authenticate: localStorage.getItem('authToken')
      }
    })
  }
  likeMovie(id: string): Observable<object> {
    return this.http.get(this.baseApiUrl + `/users/like/${id}`,{
      headers: {
        authenticate: localStorage.getItem('authToken')
      }
    })
  }
}
