import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';
import { UsersService } from '../user/users.service';
@Component({
  selector: 'app-upcoming-movies',
  templateUrl: './upcoming-movies.component.html',
  styleUrls: ['./upcoming-movies.component.scss']
})
export class UpcomingMoviesComponent implements OnInit {
  movies: Object[];
  constructor(private moviesService: MoviesService, private usersService: UsersService) { }//aquí inyecto el servicio moviesService al componente upcoming-movies

  ngOnInit() {
    this.moviesService.getUpcomingMovies().subscribe(res => this.movies = res.results, error => console.log(error))
  }
  like(movie) {
    this.usersService.likeMovie(movie.id)
      .subscribe(res => {
        this.usersService.user = res;
        movie["like"] = true;
      })
  }
  disLike(movie) {
    movie["like"] = false;
  }
}
