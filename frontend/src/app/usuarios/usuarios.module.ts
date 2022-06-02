import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuariosRoutingModule } from './usuarios-routing.module';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { FormsModule } from '@angular/forms';
import { AuxiliarService } from '../service/auxiliar.service';
import { UsuarioComponent } from './usuarios/usuario/usuario.component';



@NgModule({
  declarations: [
    UsuariosComponent,
    UsuarioComponent
  ],
  imports: [
    CommonModule,
    UsuariosRoutingModule,
    FormsModule
  ],
  providers: [AuxiliarService]
})
export class UsuariosModule { }
