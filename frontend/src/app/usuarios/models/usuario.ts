export interface Usuario {
  idUsuario: string;
  dni: number;
  nombre: string;
  fechaNacimiento: string;
  urlUsuario: string;
  getIdUsuario(urlUsuario: string): string;
}
