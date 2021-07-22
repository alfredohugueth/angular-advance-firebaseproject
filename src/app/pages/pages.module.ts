import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponetsModule } from '../components/componets.module';
import { InicioComponent } from './inicio/inicio.component';
import { GotyComponent } from './goty/goty.component';



@NgModule({
  declarations: [
    InicioComponent,
    GotyComponent
  ],
  exports:[
    InicioComponent,
    GotyComponent
  ],
  imports: [
    CommonModule, 
    ComponetsModule
  ]
})
export class PagesModule { }
