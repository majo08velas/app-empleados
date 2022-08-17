import { Injectable } from "@angular/core";
import { Empleado } from "../empleado.model";
import { DataServices } from "./data.services";
import { ServicioEmpleadosService } from "./servicio-empleados.service";

@Injectable()
//se implenta el codigo de consultas a BD, lectura de records...
export class EmpleadosService{
    constructor(private servicioEmpleado:ServicioEmpleadosService, private dataService:DataServices){

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
      this.dataService.guardarEmpleados(this.empleados);
    }

    encontrarEmpleado(indice:number){
      let empleado:Empleado=this.empleados[indice];
      return empleado;
    }

    actualizarEmpleado(empleado_actualizado:Empleado,i:number){
      let empleado_modificado = this.empleados[i];
      empleado_modificado.nombre = empleado_actualizado.nombre;
      empleado_modificado.apellido = empleado_actualizado.apellido;
      empleado_modificado.salario = empleado_actualizado.salario;
      empleado_modificado.cargo = empleado_actualizado.cargo;
    }

    eliminarEmpleado(i:number){
      let empleado_eliminado = this.empleados.splice(i,1);
      console.log(empleado_eliminado);
    }
}