import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-analiticas',
  templateUrl: './analiticas.component.html',
  styleUrls: ['./analiticas.component.css']
})
export class AnaliticasComponent implements OnInit {
 // personajes: Personaje[] = [];
  //todosPersonajes: Personaje[] = [];
  //numPaginas: number = 0;


  constructor(
    //private personajeService: PersonajeService,
    //private auxService: AuxiliarService
    ) {}
  ngOnInit(): void {
   // this.personajeService.getPersonajes().subscribe((response) => this.personajes = this.personajeService.extraerPersonajes(response));
    //this.getTodosPersonajes();
  }
 /*
  getTodosPersonajes(): void  {
    this.personajeService.getPersonajes().subscribe(r => {
      this.numPaginas = this.auxService.getPaginasResponse(r);
      for (let index = 1; index <= this.numPaginas; index++) {
        this.personajeService.getPersonajesPagina(index)
          .subscribe(response => {
            this.todosPersonajes.push(...this.personajeService.extraerPersonajes(response));
          });
      }
    });
  }*/

}
