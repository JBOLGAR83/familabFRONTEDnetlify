import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faEraser, faEye, faFilePen, faPencil, faTrash, faTrashCan, faX } from '@fortawesome/free-solid-svg-icons';
import { Observable } from 'rxjs';
import { AnaliticaImpl } from '../../models/analitica-impl';
import { AnaliticaService } from '../../service/analitica.service';

@Component({
  selector: 'app-analiticas-usuario-item',
  templateUrl: './analiticas-usuario-item.component.html',
  styleUrls: ['./analiticas-usuario-item.component.css']
})
export class AnaliticasUsuarioItemComponent implements OnInit {
  @Input() analitica: AnaliticaImpl = new AnaliticaImpl(0, '','','');
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

  analitica$: Observable<any> = new Observable<any>();
  todosAnaliticas: AnaliticaImpl[] = [];

  constructor(
    private analiticaService: AnaliticaService


) { }

  ngOnInit(): void {
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
