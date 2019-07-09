import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import {FormGroup, FormControl, Validators} from '@angular/forms'
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  // mode:string= this.usersService.user && "profile" || "register";
  constructor(private usersService:UsersService) { }
  form:FormGroup;
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
          Validators.pattern(/^(?=.*[0-9]+.*)(?=.*[a-zA-Z]+.*)[0-9a-zA-Z]{8,}$/)
        ]
      })
    })
  }
  handleSubmit(event) {
    console.log(this.form)
    if (this.form.status === "VALID") {
      this.usersService.updateProfile(this.form.value)
      .subscribe(res=>{
        console.log(res)
        this.usersService.user=res
      })
    }
  }
}
