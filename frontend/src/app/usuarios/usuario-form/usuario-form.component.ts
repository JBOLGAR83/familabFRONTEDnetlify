import { Component, OnInit } from '@angular/core';
import { UsuarioImpl } from '../models/usuario-impl';
import { UsuarioService } from '../service/usuario.service';

@Component({
  selector: 'app-usuario-form',
  templateUrl: './usuario-form.component.html',
  styleUrls: ['./usuario-form.component.css']
})
export class UsuarioFormComponent implements OnInit {
  usuario: UsuarioImpl = new UsuarioImpl(0, 0, '', '','',[]);

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit(): void {
  }
  create(): void {

    this.usuarioService.postUsuario(this.usuario);

  }
}
