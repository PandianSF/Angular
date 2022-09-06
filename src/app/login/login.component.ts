import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  Username = new FormControl('');

  Password = new FormControl('');

  constructor() {}

  open() {
    console.log(this.Username.value);

    console.log(this.Password.value);
  }
  ngOnInit(): void {}
}
