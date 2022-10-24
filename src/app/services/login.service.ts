import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { CookieService } from "ngx-cookie-service";

@Injectable()//para poder inyectar en cualquier otro componente 
export class LoginService{

    constructor(private router:Router, private cookies: CookieService ){}//se inyecta el router porque habrá redireccionamiento
    token:string

    login(email:string,password:string){
        firebase.auth().signInWithEmailAndPassword(email,password).then(res=>{
            firebase.auth().currentUser?.getIdToken().then(tkn=>{
                this.token = tkn
                this.cookies.set("token",this.token)//guarda en una cookie el token
                this.router.navigate(['/'])
            })
        })//permite la autenticacion con usuario y contraseña
    }

    getIdToken():string{
        return this.cookies.get("token")
    }

    isLogged(){
        return this.cookies.get("token")
    }

    logOut(){
        firebase.auth().signOut().then(res=>{
            this.token = ""
            this.cookies.set("token",this.token)
            this.router.navigate(['/'])
            window.location.reload()
        })
    }
}