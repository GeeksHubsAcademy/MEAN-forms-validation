import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';//importas el httpClient (no te olvides de importar httpClientModule en app.module.ts)
import {Observable} from 'rxjs' //importo el Observable para tipar el método getPopularMovies()
@Injectable({
  providedIn: 'root' //aquí inyectamos el servicio en la aplicacion
})
export class MoviesService { //generamos el servicio con ng g service [nombre del servicio]
  constructor(private http: HttpClient) { } // aquí inyectamos el httpClient como dependencia del servicio Movies
  
  getPopularMovies(page):Observable<any>{ //aquí creamos un método para obtener las películas utilizando el httpClient (el equivalente de axios en angular)
     return this.http.get(`https://api.themoviedb.org/3/movie/popular?api_key=210d6a5dd3f16419ce349c9f1b200d6d&page=${page}`);
  }
  getUpcomingMovies():Observable<any>{
    return this.http.get('https://api.themoviedb.org/3/movie/upcoming?api_key=210d6a5dd3f16419ce349c9f1b200d6d');
  }
  getTrailerById(id):Observable<any>{
    return this.http.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=210d6a5dd3f16419ce349c9f1b200d6d&language=en-US`);
  }
  getCreditsById(id:number):Observable<any>{
    return this.http.get(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=210d6a5dd3f16419ce349c9f1b200d6d`)
  }
}
