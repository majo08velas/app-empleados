import { Component, OnInit } from '@angular/core';
import firebase from 'firebase/compat/app'
import { LoginService } from './services/login.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  

  constructor(private logInService:LoginService){
    //this.empleados=this.empleadoService.empleados;//se guarda el array empleados
  }
  ngOnInit(): void {

    firebase.initializeApp({
      apiKey: "AIzaSyDR9lP0b5egtm0O_sfk3xFA5h0_Rz2Kekc",
      authDomain: "clientes-3ce8b.firebaseapp.com"
    })
  }

  islogged(){
    return this.logInService.isLogged()
  }

  logout(){
    this.logInService.logOut()
  }
}
