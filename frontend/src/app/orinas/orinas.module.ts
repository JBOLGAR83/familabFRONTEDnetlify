import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrinasRoutingModule } from './orinas-routing.module';
import { OrinasComponent } from './orinas/orinas.component';
import { OrinaItemComponent } from './orina-item/orina-item.component';


@NgModule({
  declarations: [
    OrinasComponent,
    OrinaItemComponent
  ],
  imports: [
    CommonModule,
    OrinasRoutingModule
  ]
})
export class OrinasModule { }
