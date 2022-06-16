import { Component, OnInit } from '@angular/core';
import { AuxiliarService } from 'src/app/service/auxiliar.service';
import { OrinaImpl } from '../models/orina-impl';
import { OrinaService } from '../service/orina.service';

@Component({
  selector: 'app-orina',
  templateUrl: './orina.component.html',
  styleUrls: ['./orina.component.css']
})
export class OrinaComponent implements OnInit {
  orinas: OrinaImpl[] = [];
  todosOrina: OrinaImpl[] = [];
    numPaginas: number = 0;

    constructor(
  private orinaService: OrinaService,
  private auxService: AuxiliarService) {}


    ngOnInit(): void {
      this.orinaService.getOrina().subscribe((response) => this.orinas =
      this.orinaService.extraerOrina(response));
      this.getTodosOrina();
    }


    getTodosOrina(): void {
      this.orinaService.getOrina().subscribe(r => {
        this.numPaginas = this.auxService.getPaginasResponse(r);
        for (let index = 1; index <= this.numPaginas; index++) {
          this.orinaService.getOrinaPagina(index)
            .subscribe(response => {
              this.todosOrina.push(...this.orinaService.extraerOrina(response));
            });
        }
      });
    }

  }

