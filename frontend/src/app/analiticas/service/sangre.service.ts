import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Form } from '@angular/forms';
import { catchError, Observable, throwError } from 'rxjs';
import { AuxiliarService } from 'src/app/service/auxiliar.service';
import { environment } from 'src/environments/environment';
import { SangreImpl } from '../models/sangre-impl';

@Injectable({
  providedIn: 'root',
})
export class SangreService {


  private host: string = environment.host;
  private urlEndPoint: string = `${this.host}sangres`;

  constructor(private http: HttpClient, private auxService: AuxiliarService) {}

  getSangre(): Observable<any> {
    return this.http.get<any>(this.urlEndPoint);
  }

  findById(analiticaId: any) :Observable<any> {
    return this.http.get<any>(`${this.urlEndPoint}/${analiticaId}`);
  }

  extraerSangre(respuestaApi: any): SangreImpl[] {
    const sangre: SangreImpl[] = [];
    respuestaApi._embedded.sangres.forEach((s: any) => {
      sangre.push(this.mapearSangre(s));
    });
    return sangre;
  }

  mapearSangre(sangreApi: any): SangreImpl {
    const url = sangreApi._links.self.href;
    const aux = url.split('/');
    const id = (aux[aux.length-1]);
    return new SangreImpl(
      id,
      sangreApi.fechaMuestra,
      sangreApi.urea,
      sangreApi.colesterol,
      url,
      sangreApi.usuario
    );
  }

  create(analitica: SangreImpl):  Observable<any>  {
    const url = `${this.host}sangres`;

    debugger;
    return this.http.post<any>(url, analitica);
  }
  update(asangre: SangreImpl, id: number) : Observable<any>  {
    return this.http.put<any>(`${this.urlEndPoint}/${id}`, asangre);
  }

  deleteSangre(id: number): Observable<any>{
    return this.http.delete<SangreImpl>(`${this.urlEndPoint}/${id}`).pipe(
      catchError((e) => {
        if (e.error.mensaje) {
          console.error(e.error.mensaje);
        }
        return throwError(() => new Error(e));
      })
    );


  }

  getSangrePagina(pagina: number): Observable<any> {
    return this.auxService.getItemsPorPagina(this.urlEndPoint, pagina);
  }
}
