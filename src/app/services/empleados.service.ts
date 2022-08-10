import { Injectable } from "@angular/core";
import { Empleado } from "../empleado.model";
import { ServicioEmpleadosService } from "./servicio-empleados.service";

@Injectable()
//se implenta el codigo de consultas a BD, lectura de records...
export class EmpleadosService{
    constructor(private servicioEmpleado:ServicioEmpleadosService){

    }
    empleados:Empleado[]=[
        new Empleado("Juan","Salazar","Administrador",1000),
        new Empleado("Simón","López","Aseador",800),
        new Empleado("María","Aranguren","Cajera",900),
        new Empleado("José","Torres","Director",2000),
      ];
      agregarEmpleadoServicio(empleado:Empleado){
        this.servicioEmpleado.muestraMensaje("Persona a agregar: " + empleado.nombre)
        this.empleados.push(empleado);
      }
}