import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AnaliticaImpl } from '../../models/analitica-impl';

@Component({
  selector: 'app-analiticas-usuario-item',
  templateUrl: './analiticas-usuario-item.component.html',
  styleUrls: ['./analiticas-usuario-item.component.css']
})
export class AnaliticasUsuarioItemComponent implements OnInit {
  @Input() analitica: AnaliticaImpl = new AnaliticaImpl(0, '','','');
  analitica$: Observable<any> = new Observable<any>();
  todosAnaliticas: AnaliticaImpl[] = [];

  constructor(

) { }

  ngOnInit(): void {
  }

  public onSubmit() {


  }

}
