import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UsersService {
  user: object;
  baseApiUrl = process.env.NODE_ENV === "production"
    ? "https://pelisback.herokuapp.com"
    : "http://localhost:3001"
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
  updateProfile(user, avatar): Observable<any> {
    const userData = new FormData();
    userData.set('name', user.name)
    userData.set('email', user.email)
    userData.set('password', user.password)
    userData.append('avatar', avatar)
    console.log(userData, typeof userData['avatar']);
    return this.http.patch(this.baseApiUrl + '/users/updateProfile', userData, {
      headers: {
        authenticate: localStorage.getItem('authToken')
      }
    })
  }
  likeMovie(id: string): Observable<object> {
    return this.http.get(this.baseApiUrl + `/users/like/${id}`, {
      headers: {
        authenticate: localStorage.getItem('authToken')
      }
    })
  }
  getCrewMembers(){
    return this.http.get('http://localhost:3001/crewMembers/all')
  }
  addCrewMemberPhoto(photo, id):Observable<any> {
    const crewMemberData=new FormData();
    crewMemberData.set('id',id);
    crewMemberData.append("photo",photo);
    return this.http.post('http://localhost:3001/crewMembers/add',crewMemberData,{
      headers: {
        authenticate: localStorage.getItem('authToken')
      }
    })
  }
}
