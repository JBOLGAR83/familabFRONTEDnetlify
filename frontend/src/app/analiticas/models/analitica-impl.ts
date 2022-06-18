import { Analitica } from "./analitica";

export class AnaliticaImpl {
  id: number;
  tipo: number;
  fechaMuestra: string;
  urlAnalitica: string;
  usuario: string;


  constructor (id:number,fechaMuestra: string, urlAnalitica: string, usuario: string){
    this.id = id;
    this.tipo = 0;
    this.fechaMuestra=fechaMuestra;
    this.urlAnalitica=urlAnalitica;
    this.usuario = usuario;
  }
  getIdAnalitica(urlAnalitica: string): string {
    // urlServicio = urlServicio.slice(0, urlServicio.length - 1)
    return urlAnalitica.slice(urlAnalitica.lastIndexOf('/') + 1, urlAnalitica.length);
  }


}
