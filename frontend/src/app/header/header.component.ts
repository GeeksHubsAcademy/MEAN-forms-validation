import { Component, OnInit } from '@angular/core';
import { UsersService } from '../user/users.service';
import { environment } from '../../environments/environment';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  baseApiUrl = process.env.NODE_ENV === "production"
    ? "https://pelisback.herokuapp.com/images/"
    : "http://localhost:3001/images/"
  constructor(public userService: UsersService) { }

  ngOnInit() {
    this.userService.getUserInfo()
      .subscribe(res =>this.userService.user = res)
  }

}
