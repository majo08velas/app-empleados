import { Empleado } from "../empleado.model";

//se implenta el codigo de consultas a BD, lectura de records...
export class EmpleadosService{
    empleados:Empleado[]=[
        new Empleado("Juan","Salazar","Administrador",1000),
        new Empleado("Simón","López","Aseador",800),
        new Empleado("María","Aranguren","Cajera",900),
        new Empleado("José","Torres","Director",2000),
      ];
      agregarEmpleadoServicio(empleado:Empleado){
        this.empleados.push(empleado);
      }
}