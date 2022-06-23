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
  styleUrls: ['./analiticas-usuario.component.css'],
})
export class AnaliticasUsuarioComponent implements OnInit {
  @Input() analitica: AnaliticaImpl = new AnaliticaImpl(0, '', '', '');

  analitica$: Observable<any> = new Observable<any>();
  todosAnaliticas: AnaliticaImpl[] = [];

  public name: string = '';
  public dni: number = 0;
  public sangre: SangreImpl = new SangreImpl(0, '', 0, 0, '', '');
  public orina: OrinaImpl = new OrinaImpl(0, '', '', 0, 0, '');

  constructor(
    private activateRoute: ActivatedRoute,
    private analiticaService: AnaliticaService,
    private orinaService: OrinaService,
    private sangreService: SangreService,
    private analiticasUsuarioService: AnaliticaUsuarioService
  ) {}

  ngOnInit(): void {
    this.analitica$ = this.cargarAnalitica();
  }

  cargarAnalitica(): any {
  this.todosAnaliticas=[];

  /*   console.log('id = ', this.activateRoute.snapshot.params['id']); */
    this.name = this.activateRoute.snapshot.params['name'];
    this.dni = this.activateRoute.snapshot.params['dni'];
    this.analiticasUsuarioService
      .getAnaliticasUsuario(this.activateRoute.snapshot.params['id'])
      .subscribe(
        (user) => {
         /*  console.log(user); */
          if (user._embedded.sangres) {
            user._embedded.sangres.forEach((a: any) => {
          /*     debugger; */
              const urlSelf = a._links.self.href;
              const url = urlSelf.split('/');
              const id = parseInt(url[url.length - 1]);
              a.tipo = 2;
              a.id = id;
              this.todosAnaliticas.push(a);
            });
          }
          if (user._embedded.orinas) {
            user._embedded.orinas.forEach((o: any) => {
              const urlSelf = o._links.self.href;
              const url = urlSelf.split('/');
              const id = parseInt(url[url.length - 1]);
              o.tipo = 1;
              o.id = id;
              this.todosAnaliticas.push(o);
            });
          }
        },
        (error) => {
          console.error(error);
        }
      );
  }
  onServicioEliminar(analitica: AnaliticaImpl) {
    if (analitica.tipo === 2) {
      this.sangreService.deleteSangre(analitica.id).subscribe((response) => {
        this.cargarAnalitica();
      });
    } else {
      this.orinaService.deleteOrina(analitica.id).subscribe((response) => {
        this.cargarAnalitica();
      });
    }
  }
  verAnalitica(analitica: AnaliticaImpl) {
  /*   console.log(analitica); */
  }
}
