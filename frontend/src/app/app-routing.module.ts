import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './core/not-found/not-found.component';

const routes: Routes = [
  {
    path: '', //ruta no indicada
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'usuarios',
    loadChildren: () =>
      import('src/app/usuarios/usuarios.module').then((m) => m.UsuariosModule),
  },
  {
    path: 'analitica',
    loadChildren: () =>
      import('./analiticas/analiticas.module').then((m) => m.AnaliticasModule),
  },
  {
    path: 'not-found',
    component: NotFoundComponent,
  },
  {
    path: '**',
    redirectTo: 'not-found',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
