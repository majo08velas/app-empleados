import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { EmpleadoHijoCComponent } from './empleado-hijo-c/empleado-hijo-c.component';
import { CaracteristicasEmpleadosComponent } from './caracteristicas-empleados/caracteristicas-empleados.component';
import { ServicioEmpleadosService } from './services/servicio-empleados.service';
import { EmpleadosService } from './services/empleados.service';

@NgModule({
  declarations: [
    AppComponent,
    EmpleadoHijoCComponent,
    CaracteristicasEmpleadosComponent,
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [ServicioEmpleadosService, EmpleadosService],//se colocan los servicios
  bootstrap: [AppComponent]
})
export class AppModule { }
