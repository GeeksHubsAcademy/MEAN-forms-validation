import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { MatProgressSpinnerModule } from '@angular/material'
import { MatProgressBarModule } from '@angular/material'
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PopularMoviesComponent } from './popular-movies/popular-movies.component';
import { UpcomingMoviesComponent } from './upcoming-movies/upcoming-movies.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { Page404Component } from './page404/page404.component';
import { ProfileComponent } from './user/profile/profile.component';
import { MovieCreditComponent } from './movie-credit/movie-credit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PopularMoviesComponent,
    UpcomingMoviesComponent,
    LoginComponent,
    RegisterComponent,
    LifecycleComponent,
    Page404Component,
    ProfileComponent,
    MovieCreditComponent
  ],
  imports: [
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
