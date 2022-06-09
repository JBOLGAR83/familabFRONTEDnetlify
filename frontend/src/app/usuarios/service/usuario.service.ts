import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuxiliarService } from 'src/app/service/auxiliar.service';
import { environment } from 'src/environments/environment';
import { Usuario } from '../models/usuario';
import { UsuarioImpl } from '../models/usuario-impl';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private host: string = environment.host;
  private urlEndPoint: string = `${this.host}usuarios`;

  constructor(
  private http: HttpClient,
  private auxService: AuxiliarService) { }

  getUsuarios(): Observable<any> {
  return this.http.get<any>(this.urlEndPoint);
  }

  extraerUsuarios(respuestaApi: any): Usuario[] {
  const usuarios: Usuario[] = [];
  respuestaApi._embedded.usuarios.forEach((p: any) => {
  usuarios.push(this.mapearUsuario(p));



  });
  return usuarios;
  }

  mapearUsuario(usuarioApi: any): UsuarioImpl {
  return new UsuarioImpl(
  usuarioApi.dni,
  usuarioApi.nombre,
  usuarioApi.fechaNacimiento);
  }

  create(usuario: Usuario): void {
  console.log(`Se ha creado el usuario: ${JSON.stringify(usuario)}`);
  }

  postUsuario(usuario: UsuarioImpl){
    this.http.post(this.urlEndPoint, usuario).subscribe();
  }

  deleteUsuario(dniEliminar: string){
    this.http.delete(dniEliminar).subscribe();
  }

  patchUsuario(usuario: UsuarioImpl) {
    return this.http.patch<any>(`${this.urlEndPoint}/${usuario.getIdUsuario(usuario.urlUsuario)}`, usuario);
  }

  getUsuariosPagina(pagina: number): Observable<any> {
  return this.auxService.getItemsPorPagina(this.urlEndPoint, pagina);
  }
}
