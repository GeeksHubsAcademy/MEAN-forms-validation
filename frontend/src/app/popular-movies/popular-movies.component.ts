import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service' //importo el servicio de movies
import { DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';

@Component({
  selector: 'app-popular-movies',
  templateUrl: './popular-movies.component.html',
  styleUrls: ['./popular-movies.component.scss']
})
export class PopularMoviesComponent implements OnInit {
  movies: object[]; //creamos una array de objetos de movies donde guardaremos las movies y utilizaremos en el html para pintarlos.
  page:number=1;
  totalPages:number;
  constructor(public moviesService: MoviesService, private sanitizer: DomSanitizer) { } //inyecto el servicio como dependencia del componente Popular Movies

  ngOnInit(): void {//es el equivalente a ComponentDidMount
    this.moviesService.getPopularMovies(1).subscribe(res => {
      this.totalPages=res.total_pages;
      this.movies = res.results
      console.log(res)
    }, error => console.log(error));
  }

  incrementPage(){//993 992
    if(this.totalPages>this.page) this.page++;
    this.moviesService.getPopularMovies(this.page).subscribe(res => this.movies = res.results, error => console.log(error));
  }
  decrementPage(){
    if(this.page>1)this.page--;
    this.moviesService.getPopularMovies(this.page).subscribe(res => this.movies = res.results, error => console.log(error));
  }
  goToLastPage(){
    this.page=this.totalPages;
    this.moviesService.getPopularMovies(this.page).subscribe(res => this.movies = res.results, error => console.log(error));
  }
}
