import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrinaIdComponent } from './analiticas/orina/orina-id/orina-id.component';
import { OrinaComponent } from './analiticas/orina/orina.component';
import { SangreIdComponent } from './analiticas/sangre/sangre-id/sangre-id.component';
import { SangreComponent } from './analiticas/sangre/sangre.component';
import { FormsModule } from '@angular/forms';
import { AuxiliarService } from '../service/auxiliar.service';
import { NuevoComponent } from './analiticas/nuevo/nuevo.component';
import { VerComponent } from './analiticas/ver/ver.component';
import { AnaliticasRoutingModule } from './analiticas-routing.module';
import { AnaliticasComponent } from './analiticas/analiticas.component';
import { VerTodasAnaliticasComponent } from './ver-todas-analiticas/ver-todas-analiticas.component';
import { CrearAnaliticasComponent } from './crear-analiticas/crear-analiticas.component';



@NgModule({
  declarations: [
    AnaliticasComponent,
    SangreComponent,
    OrinaComponent,
    SangreIdComponent,
    OrinaIdComponent,
    NuevoComponent,
    VerComponent,
    VerTodasAnaliticasComponent,
    CrearAnaliticasComponent,
],
  imports: [
    CommonModule,
    AnaliticasRoutingModule,
    FormsModule
  ],
  providers: [AuxiliarService]
})
export class AnaliticasModule { }
