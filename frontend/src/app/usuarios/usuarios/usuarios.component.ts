import { Component, OnInit } from '@angular/core';
import { AuxiliarService } from 'src/app/service/auxiliar.service';
import { Usuario } from '../models/usuario';
import { UsuarioImpl } from '../models/usuario-impl';
import { UsuarioService } from '../service/usuario.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css'],
})
export class UsuariosComponent implements OnInit {
  usuarios: Usuario[] = [];
  todosUsuarios: Usuario[] = [];
  usuarioVerDatos: Usuario = new UsuarioImpl(0,0, '', '', '',[]);
  numPaginas: number = 0;

  constructor(
    private usuarioService: UsuarioService,
    private auxService: AuxiliarService
  ) {}

  ngOnInit(): void {

    this.usuarioService.getUsuarios().subscribe((response) =>{
      ;
      this.usuarios = this.usuarioService.extraerUsuarios(response)
    });
      //this.getTodosUsuarios();

    /* this.usuarioService.getUsuarios().subscribe(
      (lstUser) =>{
        ;
      this.usuarios =lstUser;
      this.usuarioService.extraerUsuarios(response));
      this.getTodosUsuarios();
    }); */
  }

  verDatos(usuario: Usuario): void {
    this.usuarioVerDatos = usuario;
  }

  onUsuarioEliminar(usuario: Usuario): void {
    ;
    /* console.log(`He eliminado a ${usuario.dni}`); */
    this.usuarioService.deleteUsuario(usuario.id).subscribe(
      () => {/*  console.log('usuario eliminado'); */},
      (error) => {/* console.error(error); */}
    )
    this.usuarios = this.usuarios.filter(u => usuario !== u);
  }

  getTodosUsuarios(): void {
    this.usuarioService.getUsuarios().subscribe((r) => {
      this.numPaginas = this.auxService.getPaginasResponse(r);
      for (let index = 1; index <= this.numPaginas; index++) {
        this.usuarioService.getUsuariosPagina(index).subscribe(response => {
          this.todosUsuarios.push(
            ...this.usuarioService.extraerUsuarios(response)
          );
        });
      }
    });
  }
  borrarUsuario(id: number): void {
    this.usuarioService.deleteUsuario(id);
  }

  modificarUsuario(usuario: UsuarioImpl): void {
    this.usuarioService.patchUsuario(usuario).subscribe();
  }
}
