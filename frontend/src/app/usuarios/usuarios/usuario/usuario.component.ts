import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Usuario } from '../../models/usuario';
import { UsuarioImpl } from '../../models/usuario-impl';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
  @Input() usuario: Usuario = new UsuarioImpl(0,0, '', '','',[]);
	@Output() usuarioEliminar = new EventEmitter<Usuario>()
  constructor() { }

  ngOnInit(): void {
  }
  eliminar(): void {
    this.usuarioEliminar.emit(this.usuario);
  }
}

