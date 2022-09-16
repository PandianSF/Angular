import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  //Create FormGroup
  users: any = [
    { Username: 'Pandian', Password: 'pandian123' },
    { Username: 'George', Password: 'george123' },
    { Username: 'Askin', Password: 'askin123' },
  ];
  login: any;
  
  constructor(private router: Router) {}

  ngOnInit() {
    this.login = new FormGroup({
      Username: new FormControl('', [Validators.required]),
      Password: new FormControl('', [Validators.required]),
    });
  }
  open() {
    const userName = this.login.value.Username;
    const passWord = this.login.value.Password;
    //Checking that Username exists
    const ifExists = this.users.find((data: any) => {
      return data.Username === userName;
    });
    console.log(ifExists);
    if (ifExists && ifExists.Password === passWord) {
      this.router.navigate(['/home']);
      console.log('userExists');
    }

    console.log(this.login.value.Username);
    console.log(this.login.value.Password);
  }
}
