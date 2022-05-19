import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nuevo',
  templateUrl: './nuevo.component.html',
  styleUrls: ['./nuevo.component.css']
})
export class NuevoComponent implements OnInit {

  public analitica = {
   tipo: 0,
   fechaMuestra: "",
  };

  public tipos = [
    {id: 0, description: 'Selecciona una opción'},
    {id: 1, description: 'Sangre'},
    {id: 2, description: 'Orina'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
