import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuxiliarService } from 'src/app/service/auxiliar.service';
import { environment } from 'src/environments/environment';
import { Analitica } from '../models/analitica';
import { AnaliticaImpl } from '../models/analitica-impl';

@Injectable({
  providedIn: 'root'
})
export class AnaliticaService {
  private host: string = environment.host;
  private urlEndPoint: string = `${this.host}analiticas`;

  constructor(
  private http: HttpClient,
  private auxService: AuxiliarService) { }

  /* getUsuarios(): Observable<Usuario[]> {
    ;
  return this.http.get<Usuario[]>(this.urlEndPoint+'/findall');
  } */
  getAnaliticas(): Observable<any> {
    return this.http.get<any>(this.urlEndPoint);
    }

  /* extraerAnaliticas(respuestaApi: any): Analitica[] {
  const analiticas: Analitica[] = [];
  respuestaApi._embedded.forEach((a: any) => {
  analiticas.push(this.mapearAnalitica(a));

  });
  return analiticas;
  } */

  mapearAnalitica(analiticaApi: any): AnaliticaImpl {
    const urlSelf = analiticaApi._links.self.href;
    console.log(urlSelf);
    const url = urlSelf.split('/');
	  const id =   parseInt(url[url.length -1]);

  return new AnaliticaImpl(
    id,
    analiticaApi.fechaMuestra,
    analiticaApi.usuario,
    analiticaApi._links.self.href);
  }

  create(analitica: Analitica): void {
  console.log(`Se ha creado la analitica: ${JSON.stringify(analitica)}`);
  }

  postAnalitica(analitica: AnaliticaImpl){
    this.http.post(this.urlEndPoint, analitica).subscribe();
  }

  deleteAnalitica(id: number):Observable<any> {
    const url = `${this.urlEndPoint}/${id}`;
    ;
    return this.http.delete<any>(url);
  }

  patchAnalitica(analitica: AnaliticaImpl) {
    return this.http.patch<any>(`${this.urlEndPoint}/${analitica.id}`, analitica);
  }

  getAnaliticasPagina(pagina: number): Observable<any> {
  return this.auxService.getItemsPorPagina(this.urlEndPoint, pagina);
  }
}
