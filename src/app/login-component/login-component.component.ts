import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent implements OnInit {

  constructor(private logInService:LoginService) { }

  ngOnInit(): void {
  }

  login(form:NgForm){
    const email = form.value.email;
    const pass = form.value.password
    this.logInService.login(email,pass)
  }
}
