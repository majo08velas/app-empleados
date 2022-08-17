import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Empleado } from '../empleado.model';
import { EmpleadosService } from '../services/empleados.service';

@Component({
  selector: 'app-actualiza-component',
  templateUrl: './actualiza-component.component.html',
  styleUrls: ['./actualiza-component.component.css']
})
export class ActualizaComponentComponent implements OnInit {

  form_title = "Formulario registro";
  nombre:string="";
  apellido:string="";
  cargo:string="";
  salario:number=0;
  empleado_actualizado!: Empleado;
  registro=false;
  mensaje:string="";
  empleados:Empleado[]=[];
  i:number;
  actualiza:boolean=false;
  elimina:boolean=false;
  accion:number;

  constructor(private router:Router,private route:ActivatedRoute,private empleadoService:EmpleadosService) {
  }

  ngOnInit(): void {
    this.accion = parseInt(this.route.snapshot.queryParams['accion']);
    if(this.accion == 1){
      this.actualiza=true;
    }else{
      this.elimina=true;
    }
    this.empleados=this.empleadoService.empleados;
    this.i = this.route.snapshot.params['id'];
    let empleado:Empleado = this.empleadoService.encontrarEmpleado(this.i);
    this.nombre = empleado.nombre;
    this.apellido = empleado.apellido;
    this.cargo = empleado.cargo;
    this.salario = empleado.salario;
    console.log(empleado);
  }

  volverHome(){
    this.router.navigate(['']);
  }

  actualizarEmpleado(){
    if(this.accion == 1){
      let empleado_actualizado = new Empleado(this.nombre,this.apellido,this.cargo,this.salario);
      this.empleadoService.actualizarEmpleado(empleado_actualizado,this.i);
      this.router.navigate(['']);
    }else{
      this.empleadoService.eliminarEmpleado(this.i);
      this.router.navigate(['']);
    }
  }
}
