import { Component, OnInit } from '@angular/core';
import {UsersService} from '../user/users.service'
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(userService:UsersService) { }

  ngOnInit() {
  }

}
