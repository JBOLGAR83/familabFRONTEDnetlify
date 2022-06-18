import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { AnaliticaService } from '../service/analitica.service';
import { AnaliticaUsuarioService } from '../service/analitica-usuario.service';
import { AnaliticaImpl } from '../models/analitica-impl';

@Component({
  selector: 'app-analiticas-usuario',
  templateUrl: './analiticas-usuario.component.html',
  styleUrls: ['./analiticas-usuario.component.css']
})
export class AnaliticasUsuarioComponent implements OnInit {
  @Input() analitica: AnaliticaImpl = new AnaliticaImpl(0,'','','');

  analitica$: Observable<any> = new Observable<any>();
  todosAnaliticas: AnaliticaImpl[] = [];
  constructor(
    private activateRoute: ActivatedRoute,
    private analiticaService: AnaliticaService,
    private analiticasUsuarioService: AnaliticaUsuarioService) { }

  ngOnInit(): void {
    this.analitica$ = this.cargarAnalitica();
  }

  cargarAnalitica(): any {

    console.log('id = ', this.activateRoute.snapshot.params['id']);
   this.analiticasUsuarioService.getAnaliticasUsuario(this.activateRoute.snapshot.params['id']).subscribe(
    (user)=>{
      console.log(user);
    },
    (error)=> {console.error(error);}   );
  }
}
