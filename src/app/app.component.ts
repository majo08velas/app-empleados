import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  

  constructor(){
    //this.empleados=this.empleadoService.empleados;//se guarda el array empleados
  }
  ngOnInit(): void {
  }
}
