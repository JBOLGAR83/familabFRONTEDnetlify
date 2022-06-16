import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuxiliarService } from '../service/auxiliar.service';
import { AnaliticasRoutingModule } from './analiticas-routing.module';
import { AnaliticasComponent } from './analiticas/analiticas.component';
import { AnaliticaFormComponent } from './analitica-form/analitica-form.component';
import { AnaliticaItemComponent } from './analitica-item/analitica-item.component';
/* import { AnaliticaComponent } from './analiticas/analitica/analitica.component'; */
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import { EdicionAnaliticasComponent } from './edicion-analiticas/edicion-analiticas.component';
import { AnaliticasUsuarioComponent } from './analiticas-usuario/analiticas-usuario.component';
import { SangreComponent } from './sangre/sangre.component';
import { SangreItemComponent } from './sangre-item/sangre-item.component';
import { OrinaComponent } from './orina/orina.component';
import { OrinaItemComponent } from './orina-item/orina-item.component';



@NgModule({
  declarations: [
    AnaliticasComponent,
    AnaliticaFormComponent,
    AnaliticaItemComponent,
    /* AnaliticaComponent, */
    EdicionAnaliticasComponent,
    AnaliticasUsuarioComponent,
    SangreComponent,
    SangreItemComponent,
    OrinaComponent,
    OrinaItemComponent,
],
  imports: [
    CommonModule,
    AnaliticasRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    HttpClientModule
  ],
  providers: [AuxiliarService]
})
export class AnaliticasModule { }
