import { AnaliticaImpl } from "./analitica-impl";

export class OrinaImpl  extends AnaliticaImpl
 {
  filter(arg0: (m: AnaliticaImpl) => boolean): OrinaImpl {
    throw new Error('Method not implemented.');
  }
  densidad: number;
  ph: number;


constructor(id:number,fechaMuestra: string,urlAnalitica:string, densidad: number, ph:number, usuario: string ){
  super(id, fechaMuestra, urlAnalitica, usuario);
  super.tipo=1;
  this.densidad=densidad;
  this.ph=ph;
}
getIdOrina(url: string): string {
  url = url.slice(0, url.length - 1)
  return url.slice(url.lastIndexOf('/') + 1, url.length);
}

}
