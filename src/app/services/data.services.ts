import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Empleado } from "../empleado.model";

@Injectable()
export class DataServices{

    constructor(private httpClient:HttpClient){
    }

    guardarEmpleados(empleados:Empleado[]){
        this.httpClient.post('https://clientes-3ce8b-default-rtdb.firebaseio.com/datos.json',empleados).subscribe(
            res => console.log("Se han guardado los empleados " + res.valueOf),
            err => console.log("Error: " + err)
        );//la url de la bd firebase y lo que se quiere guardar
    }
}