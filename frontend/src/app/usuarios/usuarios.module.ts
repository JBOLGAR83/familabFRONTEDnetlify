import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuariosRoutingModule } from './usuarios-routing.module';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { FormsModule } from '@angular/forms';
import { AuxiliarService } from '../service/auxiliar.service';
import { UsuarioComponent } from './usuarios/usuario/usuario.component';
import { UsuarioItemComponent } from './usuario-item/usuario-item.component';
import { UsuarioFormComponent } from './usuario-form/usuario-form.component';


@NgModule({
  declarations: [
    UsuariosComponent,
    UsuarioComponent,
    UsuarioItemComponent,
    UsuarioFormComponent

  ],
  imports: [
    CommonModule,
    UsuariosRoutingModule,
    FormsModule,



  ],
  exports: [ UsuarioComponent],
  providers: [AuxiliarService]
})
export class UsuariosModule { }
