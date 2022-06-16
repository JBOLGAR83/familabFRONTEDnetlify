/* import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Analitica } from '../../models/analitica';
import { AnaliticaImpl } from '../../models/analitica-impl';

@Component({
  selector: 'app-analitica',
  templateUrl: './analitica.component.html',
  styleUrls: ['./analitica.component.css']
})
export class AnaliticaComponent implements OnInit {
  @Input() analitica: Analitica = new AnaliticaImpl(0,'',0,0,0,0, '');
  @Output() analiticaEliminar = new EventEmitter<Analitica>()

  constructor() { }

  ngOnInit(): void {
  }
  eliminar(): void {
    this.analiticaEliminar.emit(this.analitica);

}
}
 */
