export interface Analitica {
  idAnalitica: number;
  tipoAnalitica: string,
    fechaMuestra: string,
    colesterol: number,
    urea: number,
    densidad:number,
    ph:number
    urlAnalitica: string;
    getIdAnalitica(urlAnalitica: string): string;
}
