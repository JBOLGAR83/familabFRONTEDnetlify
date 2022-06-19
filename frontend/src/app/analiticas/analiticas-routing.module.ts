import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnaliticaFormComponent } from './analitica-form/analitica-form.component';
import { AnaliticasUsuarioComponent } from './analiticas-usuario/analiticas-usuario.component';
import { AnaliticasComponent } from './analiticas/analiticas.component';
import { EdicionAnaliticasComponent } from './edicion-analiticas/edicion-analiticas.component';
import { OrinaComponent } from './orina/orina.component';
import { SangreComponent } from './sangre/sangre.component';

const routes: Routes = [
 {
  path:'',
  component: AnaliticasComponent,
 },
  {
  path: 'analiticas-form',
  component: AnaliticaFormComponent,
},
{
  path: 'edicion-analiticas/:id/:type',
  component: EdicionAnaliticasComponent,
},
{
  path: 'sangres/:id',
  component: SangreComponent,
},
{
  path: 'orinas/:id',
  component: OrinaComponent,
},
{
  path: 'analiticas-usuario/:id',
  component: AnaliticasUsuarioComponent,
  children: [
    {
      path: 'analitica-item', component: AnaliticasUsuarioComponent
    }
  ]
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnaliticasRoutingModule { }
