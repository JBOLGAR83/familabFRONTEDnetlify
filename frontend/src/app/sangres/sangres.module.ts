import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SangresRoutingModule } from './sangres-routing.module';
import { SangresComponent } from './sangres/sangres.component';
import { SangreItemComponent } from './sangre-item/sangre-item.component';


@NgModule({
  declarations: [
    SangresComponent,
    SangreItemComponent
  ],
  imports: [
    CommonModule,
    SangresRoutingModule
  ]
})
export class SangresModule { }
