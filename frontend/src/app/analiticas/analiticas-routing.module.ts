import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnaliticasComponent } from './analiticas/analiticas.component';
import { SangreComponent } from './analiticas/sangre/sangre.component';
import { OrinaComponent } from './analiticas/orina/orina.component';
import { OrinaIdComponent } from './analiticas/orina/orina-id/orina-id.component';
import { NuevoComponent } from './analiticas/nuevo/nuevo.component';
import { VerComponent } from './analiticas/ver/ver.component';
import { SangreIdComponent } from './analiticas/sangre/sangre-id/sangre-id.component';

const routes: Routes = [
 {
  path:'',
  component: AnaliticasComponent,


  children: [
    {
      path: 'nuevo', component: NuevoComponent
    },
    {
      path: 'ver', component: VerComponent
    },

    {
      path: 'sangre', component: SangreComponent
    },
    {
      path: 'sangre/:Idsangre', component: SangreIdComponent
    },
    {
    path: 'orina', component: OrinaComponent
  },
  {
    path: 'orina/:Idorina', component: OrinaIdComponent
  }
]
 }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnaliticasRoutingModule { }
