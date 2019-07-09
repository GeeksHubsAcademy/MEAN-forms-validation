import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsersService } from '../users.service'
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  form: FormGroup;
  constructor(private usersService: UsersService) { }
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
  ngDoCheck() {
  }
  handleSubmit() {
    if (this.form.status === "VALID") {
      this.usersService.register(this.form.value)
        .subscribe(res =>{
           console.log(res)
           localStorage.setItem('authToken',res.token)
        },
          error => console.log(error) )
    }
  }
}
