import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators, FormBuilder} from "@angular/forms";
import {ActivatedRoute, Params, Router} from "@angular/router";
import { AuthService } from '../services/auth.service';
import { LoginInfo } from '../model/loginInfo';


@Component({
  selector: 'sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  formGroup: FormGroup;

  constructor(private authService: AuthService, private fb: FormBuilder) {}

  ngOnInit() {
    const validatePasswordsEqual = (group) => {
      if (group.get('password') && group.get('password2 ')) {
        if (group.get('password').value == group.get('password2').value) {
          return {equal: "Not Equal"};
        }
      }
    }

    this.formGroup = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required, validatePasswordsEqual]],
      password2: ['', [Validators.required, validatePasswordsEqual]]
    })
    console.log(this.formGroup.get("password"));
  }

  register() {
    if (this.formGroup.valid) {
      const loginInfo: LoginInfo = {
        username: this.formGroup.get("username").value,
        password: this.formGroup.get("password").value
      }
      this.authService.createUser(loginInfo).subscribe(() => {
        
      });
    }
  }
  
}
