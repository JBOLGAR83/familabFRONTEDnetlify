import { Usuario } from "./usuario";

export class UsuarioImpl implements Usuario{
  id: number = 0;
  dni: number=0;
  nombre: string="";
  fechaNacimiento: string="";
  analiticas: any=[];
  urlUsuario: string="";


  constructor (id:number, dni: number, nombre: string, fechaNacimiento: string, urlUsuario: string, analiticas: any[]){
    this.id = id;
    this.dni = dni;
    this.nombre = nombre;
    this.fechaNacimiento = fechaNacimiento;
    this.urlUsuario = urlUsuario;
    this.analiticas = analiticas;
  }
  
}
