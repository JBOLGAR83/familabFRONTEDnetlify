import { Usuario } from "./usuario";

export class UsuarioImpl implements Usuario{

  dni: number=0;
  nombre: string="";
  fechaNacimiento: string="";


  constructor (dni: number, nombre: string, fechaNacimiento: string){
    this.dni = dni;
    this.nombre = nombre;
    this.fechaNacimiento = fechaNacimiento;
  }
}
