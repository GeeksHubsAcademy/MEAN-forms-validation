import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PopularMoviesComponent } from './popular-movies/popular-movies.component'
import { UpcomingMoviesComponent } from './upcoming-movies/upcoming-movies.component';
import { LifecycleComponent } from './lifecycle/lifecycle.component'
import {Page404Component} from './page404/page404.component'
import {RegisterComponent} from './user/register/register.component'
import {LoginComponent} from './user/login/login.component'
import {ProfileComponent} from './user/profile/profile.component';
import {MovieCreditComponent} from './movie-credit/movie-credit.component'
const routes: Routes = [
  { path: "popular", component: PopularMoviesComponent },
  { path: "register", component: RegisterComponent },
  { path: "profile", component: ProfileComponent },
  { path: "login", component: LoginComponent },
  { path: "upcoming", component: UpcomingMoviesComponent },
  { path: "movie/:id", component: LifecycleComponent },
  { path: "credit", component: MovieCreditComponent },
  // { path: 'popular/', redirectTo: 'popular', pathMatch: 'full'},
  { path: '**', component: Page404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
