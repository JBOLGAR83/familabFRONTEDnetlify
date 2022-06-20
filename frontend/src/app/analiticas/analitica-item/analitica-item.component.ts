import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { faEraser, faEye, faFilePen, faPencil, faTrash, faTrashCan, faX } from '@fortawesome/free-solid-svg-icons';
import { AuxiliarService } from 'src/app/service/auxiliar.service';
import { AnaliticaImpl } from '../models/analitica-impl';
import { AnaliticaService } from '../service/analitica.service';

@Component({
  selector: 'app-analitica-item',
  templateUrl: './analitica-item.component.html',
  styleUrls: ['./analitica-item.component.css']
})
export class AnaliticaItemComponent implements OnInit {
  @Input() analitica: any;
  @Output() analiticaSeleccionado = new EventEmitter<AnaliticaImpl>();
  @Output() analiticaEliminar = new EventEmitter<AnaliticaImpl>();
  @Output() analiticaEditar = new EventEmitter<AnaliticaImpl>();



  pencil = faPencil;
  mirar = faEye;
  trash = faTrashCan;
  eraser = faEraser;
  trash2 = faTrash;
  x = faX;
  modificar = faFilePen;

  constructor(
    private analiticaService: AnaliticaService
    /* private auxService: AuxiliarService,
    private activateRoute: ActivatedRoute,
    private router: Router, */
  ) { }

  ngOnInit(): void {
    console.log(this.analitica);
    debugger;
  }

  public onSubmit() {



  }

  borrarAnalitica(analitica: AnaliticaImpl["id"]): void {
    //    this.negocioService.deleteNegocio(this.negocioItem.urlNegocio);
    if (confirm('Confirme para eliminar')) {
      this.analiticaEliminar.emit(this.analitica);


    }

  }
  obtenerAnalitica() {
    this.analiticaSeleccionado.emit(this.analitica);
  }
  modificarAnalitica(analitica: AnaliticaImpl): void {
    this.analiticaService.patchAnalitica(analitica).subscribe();
  }
}
