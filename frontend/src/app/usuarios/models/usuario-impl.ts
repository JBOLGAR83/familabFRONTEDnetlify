import { Usuario } from "./usuario";

export class UsuarioImpl implements Usuario{
  idUsuario: string="";
  dni: number=0;
  nombre: string="";
  fechaNacimiento: string="";
  urlUsuario: string="";


  constructor (dni: number, nombre: string, fechaNacimiento: string){

    this.dni = dni;
    this.nombre = nombre;
    this.fechaNacimiento = fechaNacimiento;
  }
  getIdUsuario(url: string): string {
	  url = url.slice(0, url.length - 1)
	  return url.slice(url.lastIndexOf('/') + 1, url.length);
	}

}
