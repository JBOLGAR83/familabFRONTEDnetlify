import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuxiliarService } from 'src/app/service/auxiliar.service';
import { Analitica } from '../models/analitica';
import { AnaliticaImpl } from '../models/analitica-impl';
import { OrinaImpl } from '../models/orina-impl';
import { SangreImpl } from '../models/sangre-impl';
import { AnaliticaService } from '../service/analitica.service';
import { OrinaService } from '../service/orina.service';
import { SangreService } from '../service/sangre.service';

@Component({
  selector: 'app-analiticas',
  templateUrl: './analiticas.component.html',
  styleUrls: ['./analiticas.component.css']
})
export class AnaliticasComponent implements OnInit {
  /* analiticas: Analitica[] = []; */
  todosAnaliticas: AnaliticaImpl[] = [];
  /* analiticaVerDatos: Analitica = new AnaliticaImpl(0,'','');
  numPaginas: number = 0;
 */
  public sangre: SangreImpl = new SangreImpl(0, '', 0,0 ,'', '');
  public orina: OrinaImpl = new OrinaImpl(0, '', '',0 ,0,'');

  constructor(
    private orinaService: OrinaService,
    private sangreService: SangreService,
    private router: Router
  ) {}

  ngOnInit(): void {

    this.getTodosAnaliticas();
  }

  getTodosAnaliticas(): void {
    this.todosAnaliticas = [];
    this.sangreService.getSangre().subscribe((response) => {
      this.todosAnaliticas.push(
        ...this.sangreService.extraerSangre(response)
      );

      this.orinaService.getOrina().subscribe((response) => {
        this.todosAnaliticas.push(
          ...this.orinaService.extraerOrina(response)
        );
      });
    });
  }

  onServicioEliminar(analitica: AnaliticaImpl) {
    if (analitica.tipo === 2) {
      this.sangreService
        .deleteSangre(analitica.id)
        .subscribe((response) => {
          this.getTodosAnaliticas();
        });
    } else {
      this.orinaService
        .deleteOrina(analitica.id)
        .subscribe((response) => {
          this.getTodosAnaliticas();
        });
    }
  }

  verAnalitica(analitica: AnaliticaImpl){
    debugger;
    console.log(analitica);
  }
}
