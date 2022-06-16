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
  private urlEndPointO: string = `${this.host}orinas`;

  constructor(private http: HttpClient, private auxService: AuxiliarService) {}

  getOrina(): Observable<any> {
    return this.http.get<any>(this.urlEndPointO);
  }

  findById(analiticaId: any) :Observable<any> {
    return this.http.get<any>(`${this.urlEndPointO}/${analiticaId}`);
  }

  extraerOrina(respuestaApi: any): OrinaImpl[] {
    const orina: OrinaImpl[] = [];
    debugger;
    respuestaApi._embedded.orinas.forEach((o: any) => {
      orina.push(this.mapearOrina(o));
    });
    debugger;
    return orina;
  }

  mapearOrina(orinaAPI: any): OrinaImpl {
    debugger;
    const url = orinaAPI._links.self.href;
    const aux = url.split('/');
    const id = (aux[aux.length - 1]);
    return new OrinaImpl(
      id,
      orinaAPI.fechaMuestra,
      orinaAPI.densidad,
      orinaAPI.ph,
      orinaAPI.urlAnalitica
    );
  }

  create(analitica: OrinaImpl):  Observable<any>  {
    const url = `${this.host}orinas`;

    debugger;
    return this.http.post<any>(url, analitica);
  }

  update(aori: OrinaImpl, id: number) : Observable<any>  {
    return this.http.put<any>(`${this.urlEndPointO}/${id}`, aori);
  }

  deleteOrina(id: number): Observable<any>{
    return this.http.delete<OrinaImpl>(`${this.urlEndPointO}/${id}`).pipe(
      catchError((e) => {
        if (e.error.mensaje) {
          console.error(e.error.mensaje);
        }
        return throwError(() => new Error(e));
      })
    );


  }

  getOrinaPagina(pagina: number): Observable<any> {
    return this.auxService.getItemsPorPagina(this.urlEndPointO, pagina);
  }
}
