import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Empleado } from "../empleado.model";
import { LoginService } from "./login.service";

@Injectable()
export class DataServices{

    constructor(private httpClient:HttpClient, private logInService:LoginService){
    }

    cargarEmpleados(){
        const token = this.logInService.getIdToken()
        return this.httpClient.get('https://clientes-3ce8b-default-rtdb.firebaseio.com/datos.json?auth=' + token)
    }

    guardarEmpleados(empleados:Empleado[]){
        this.httpClient.put('https://clientes-3ce8b-default-rtdb.firebaseio.com/datos.json',empleados).subscribe(
            (res) => console.log("Se han guardado los empleados " + res.valueOf),
            (err) => console.log("Error: " + err)
        );//la url de la bd firebase y lo que se quiere guardar
    }

    actualizarEmpleados(indice:number,empleado:Empleado){
       let url = 'https://clientes-3ce8b-default-rtdb.firebaseio.com/datos/' + indice + '.json'
       this.httpClient.put(url,empleado).subscribe(
            (res) => console.log("Se ha actualizado el empleado " + res),
            (err) => console.log("Error: " + err)
        );
    }

    eliminarEmpleados(indice:number){
        let url = 'https://clientes-3ce8b-default-rtdb.firebaseio.com/datos/' + indice + '.json';
        this.httpClient.delete(url).subscribe(
            (res) => console.log("Se ha eliminado el empleado " + res.valueOf),
            (err) => console.log("Error: " + err)
        );
    }
}