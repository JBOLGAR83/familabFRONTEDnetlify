import { Component, OnInit } from '@angular/core';
import { AuxiliarService } from 'src/app/service/auxiliar.service';
import { SangreImpl } from '../models/sangre-impl';
import { SangreService } from '../service/sangre.service';

@Component({
  selector: 'app-sangre',
  templateUrl: './sangre.component.html',
  styleUrls: ['./sangre.component.css']
})
export class SangreComponent implements OnInit {
  sangres: SangreImpl[] = [];
  todosSangre: SangreImpl[] = [];
    numPaginas: number = 0;

    constructor(
  private sangreService: SangreService,
  private auxService: AuxiliarService) {}


    ngOnInit(): void {
      this.sangreService.getSangre().subscribe((response) => this.sangres =
      this.sangreService.extraerSangre(response));
      this.getTodosSangre();
    }


    getTodosSangre(): void {
      this.sangreService.getSangre().subscribe(r => {
        this.numPaginas = this.auxService.getPaginasResponse(r);
        for (let index = 1; index <= this.numPaginas; index++) {
          this.sangreService.getSangrePagina(index)
            .subscribe(response => {
              this.todosSangre.push(...this.sangreService.extraerSangre(response));
            });
        }
      });
    }

  }
