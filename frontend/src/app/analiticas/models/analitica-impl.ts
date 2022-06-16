import { Analitica } from "./analitica";

export class AnaliticaImpl implements Analitica {
  id: number;
  tipo: number;
  fechaMuestra: string;
  urlAnalitica: string;


  constructor (id:number,fechaMuestra: string, urlAnalitica: string){
    this.id = id;
    this.tipo = 0;
    this.fechaMuestra=fechaMuestra;
    this.urlAnalitica=urlAnalitica;
  }
  getIdAnalitica(urlAnalitica: string): string {
    // urlServicio = urlServicio.slice(0, urlServicio.length - 1)
    return urlAnalitica.slice(urlAnalitica.lastIndexOf('/') + 1, urlAnalitica.length);
  }


}
