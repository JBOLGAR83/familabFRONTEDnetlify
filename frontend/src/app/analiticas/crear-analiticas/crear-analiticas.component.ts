import { Component, OnInit } from '@angular/core';
import { Analitica } from '../models/analitica';

@Component({
  selector: 'app-crear-analiticas',
  templateUrl: './crear-analiticas.component.html',
  styleUrls: ['./crear-analiticas.component.css']
})
export class CrearAnaliticasComponent implements OnInit {

  public nuevaAnalitica = {
    tipoAnalitica: '',
    fechaMuestra: '',
    colesterol: 0,
    urea: 0,
    densidad:0,
    ph:0
  };
  public analiticas: Analitica[] = [];
  public numeroAnaliticas = 0;

  public guardarAnalitica() {
    //this.negocios.push({...this.nuevoNegocio});
    this.numeroAnaliticas = this.analiticas.length;
  }

  public borrarAnalitica(analitica: Analitica){
    this.analiticas = this.analiticas.filter(a => a.idAnalitica !== analitica.idAnalitica );
    this.numeroAnaliticas = this.analiticas.length;
  }



  constructor() { }

  ngOnInit(): void {
  }

}
