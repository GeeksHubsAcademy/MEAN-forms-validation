import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';
import { UsersService } from '../user/users.service';

@Component({
  selector: 'app-movie-credit',
  templateUrl: './movie-credit.component.html',
  styleUrls: ['./movie-credit.component.scss']
})
export class MovieCreditComponent implements OnInit {
  baseApiUrl = process.env.NODE_ENV === "production"
  ? "https://pelisback.herokuapp.com/images/"
  : "http://localhost:3001/images/"
  credits:object[];
  constructor(public moviesService:MoviesService, public usersService:UsersService) { }
  crewMembers:any;
  ngOnInit() {
    this.moviesService.getCreditsById(550).subscribe(res=>this.credits=res.cast)
    this.usersService.getCrewMembers().subscribe(res=>this.crewMembers=res)
  }
  uploadPhoto(event:Event,id:number):void{
    const photo = (event.target as HTMLInputElement).files[0];
    console.log(id)
    this.usersService.addCrewMemberPhoto(photo,id).subscribe(console.log);
  }
}
