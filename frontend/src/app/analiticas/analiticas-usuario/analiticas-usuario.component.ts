import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { AnaliticaService } from '../service/analitica.service';
import { AnaliticaUsuarioService } from '../service/analitica-usuario.service';
import { AnaliticaImpl } from '../models/analitica-impl';
import { SangreImpl } from '../models/sangre-impl';
import { OrinaImpl } from '../models/orina-impl';
import { OrinaService } from '../service/orina.service';
import { SangreService } from '../service/sangre.service';

@Component({
  selector: 'app-analiticas-usuario',
  templateUrl: './analiticas-usuario.component.html',
  styleUrls: ['./analiticas-usuario.component.css']
})
export class AnaliticasUsuarioComponent implements OnInit {
  @Input() analitica: AnaliticaImpl = new AnaliticaImpl(0,'','','');

  analitica$: Observable<any> = new Observable<any>();
  todosAnaliticas: AnaliticaImpl[] = [];

  public sangre: SangreImpl = new SangreImpl(0, '', 0,0 ,'', '');
  public orina: OrinaImpl = new OrinaImpl(0, '', '',0 ,0,'');

  constructor(
    private activateRoute: ActivatedRoute,
    private analiticaService: AnaliticaService,
    private orinaService: OrinaService,
    private sangreService: SangreService,
    private analiticasUsuarioService: AnaliticaUsuarioService) { }

  ngOnInit(): void {
    debugger;
    this.analitica$ = this.cargarAnalitica();
  }

  cargarAnalitica(): any {

    console.log('id = ', this.activateRoute.snapshot.params['id']);
   this.analiticasUsuarioService.getAnaliticasUsuario(this.activateRoute.snapshot.params['id']).subscribe(
    (user)=>{
      debugger;
      console.log(user);
      user._embedded.sangres.forEach((a:any) => {
        this.todosAnaliticas.push(a);
      });

      user._embedded.orinas.forEach((o:any) => {
        this.todosAnaliticas.push(o);
      });

    },
    (error)=> {console.error(error);}   );
  }
  onServicioEliminar(analitica: AnaliticaImpl) {
    if (analitica.tipo === 2) {
      this.sangreService
        .deleteSangre(analitica.id)
        .subscribe((response) => {
          this.cargarAnalitica();
        });
    } else {
      this.orinaService
        .deleteOrina(analitica.id)
        .subscribe((response) => {
          this.cargarAnalitica();
        });
    }
  }
  verAnalitica(analitica: AnaliticaImpl){
    debugger;
    console.log(analitica);
  }

}
