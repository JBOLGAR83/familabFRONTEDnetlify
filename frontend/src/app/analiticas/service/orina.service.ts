import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Form } from '@angular/forms';
import { catchError, Observable, throwError } from 'rxjs';
import { AuxiliarService } from 'src/app/service/auxiliar.service';
import { environment } from 'src/environments/environment';
import { OrinaImpl } from '../models/orina-impl';

@Injectable({
  providedIn: 'root',
})
export class OrinaService {

  private host: string = environment.host;
  private urlEndPoint: string = `${this.host}orinas`;

  constructor(private http: HttpClient, private auxService: AuxiliarService) {}

  getOrina(): Observable<any> {
    return this.http.get<any>(this.urlEndPoint);
  }

  findById(analiticaId: any) :Observable<any> {
    return this.http.get<any>(`${this.urlEndPoint}/${analiticaId}`);
  }

  extraerOrina(respuestaApi: any): OrinaImpl[] {
    const orina: OrinaImpl[] = [];
    respuestaApi._embedded.orinas.forEach((o: any) => {
      orina.push(this.mapearOrina(o));
    });
    return orina;
  }

  mapearOrina(orinaAPI: any): OrinaImpl {
    const url = orinaAPI._links.self.href;
    const aux = url.split('/');
    const id = (aux[aux.length - 1]);
    ;
    return new OrinaImpl(
      id,
      orinaAPI.fechaMuestra,
      url,
      orinaAPI.densidad,
      orinaAPI.ph,
      orinaAPI.usuario
    );
  }

  create(analitica: OrinaImpl):  Observable<any>  {
    const url = `${this.host}orinas`;

    return this.http.post<any>(url, analitica);
  }

  update(aori: OrinaImpl, id: number) : Observable<any>  {
    return this.http.put<any>(`${this.urlEndPoint}/${id}`, aori);
  }

  deleteOrina(id: number): Observable<any>{
    return this.http.delete<OrinaImpl>(`${this.urlEndPoint}/${id}`).pipe(
      catchError((e) => {
        if (e.error.mensaje) {
          console.error(e.error.mensaje);
        }
        return throwError(() => new Error(e));
      })
    );


  }

  getOrinaPagina(pagina: number): Observable<any> {
    return this.auxService.getItemsPorPagina(this.urlEndPoint, pagina);
  }
}
