import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {UsersService} from '../users.service'
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  form: FormGroup;
  constructor(private usersService:UsersService) { }
  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl(null, {
        validators: [Validators.minLength(8), Validators.maxLength(40)],
      }),
      email: new FormControl(null, {
        validators: [
          Validators.email,
          Validators.required
        ]
      }),
      password: new FormControl(null, {
        validators: [
          Validators.required,
          Validators.pattern(/(?!^[0-xºZ]*$)^([a-zA-Z0-9]{8,15})$/)
        ]
      })
    })
  }
  ngDoCheck(){
  }
  handleSubmit(){
    this.usersService.register(this.form.value)
    .subscribe(res=>console.log(res))
  }
}
