import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UsuarioFormComponent } from 'src/app/usuarios/usuario-form/usuario-form.component';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AnaliticaUsuarioService {
  private host: string = environment.host;
  private urlEndPoint: string = `${this.host}usuarios/`;
  constructor(private http: HttpClient) { }

  getAnaliticasUsuario(id: string): Observable<any> {
    return this.http.get<any>(`${this.urlEndPoint}${id}/analiticas`);
  }
}
