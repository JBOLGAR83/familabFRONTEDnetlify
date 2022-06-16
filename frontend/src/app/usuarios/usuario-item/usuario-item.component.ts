import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Usuario } from '../models/usuario';
import { UsuarioImpl } from '../models/usuario-impl';

@Component({
  selector: 'app-usuario-item',
  templateUrl: './usuario-item.component.html',
  styleUrls: ['./usuario-item.component.css']
})
export class UsuarioItemComponent implements OnInit {
  @Input() usuario: Usuario = new UsuarioImpl(0,0,'','','',[]);
  @Output() usuarioSeleccionado = new EventEmitter<Usuario>();

  constructor() { }

  ngOnInit(): void {
  }

}
