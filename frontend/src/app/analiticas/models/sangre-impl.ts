
import { AnaliticaImpl } from "./analitica-impl";

export class SangreImpl extends AnaliticaImpl  {
  filter(arg0: (m: AnaliticaImpl) => boolean): SangreImpl {
    throw new Error('Method not implemented.');
  }
  colesterol: number;
  urea: number;

  constructor(id: number, fechaMuestra: string, urlAnalitica: string , colesterol: number, urea: number){
    super(id, fechaMuestra, urlAnalitica);
    super.tipo=1;
    this.colesterol=colesterol;
    this.urea = urea;
  }

  getIdSangre(url: string): string {
    url = url.slice(0, url.length - 1)
    return url.slice(url.lastIndexOf('/') + 1, url.length);
  }

}
