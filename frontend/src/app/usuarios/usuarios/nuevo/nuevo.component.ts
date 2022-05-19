import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nuevo',
  templateUrl: './nuevo.component.html',
  styleUrls: ['./nuevo.component.css']
})
export class NuevoComponent implements OnInit {

  public usuario = {
    nombre: "",
    dni: "",
    fechaNacimiento:'',
  }

  constructor() { }

  ngOnInit(): void {
  }

}
