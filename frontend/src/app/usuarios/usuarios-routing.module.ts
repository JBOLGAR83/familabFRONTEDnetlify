import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { NuevoComponent } from './usuarios/nuevo/nuevo.component';
import { VerComponent } from './usuarios/ver/ver.component';

const routes: Routes = [
  {
    path:'',
  component: UsuariosComponent,

  children: [
    {
      path: 'nuevo', component: NuevoComponent
    },
    {
      path: 'ver', component: VerComponent
    }
  ]

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuariosRoutingModule { }
