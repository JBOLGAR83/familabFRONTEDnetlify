import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuarioImpl } from 'src/app/usuarios/models/usuario-impl';
import { UsuarioService } from 'src/app/usuarios/service/usuario.service';
import { environment } from 'src/environments/environment';
import { AnaliticaImpl } from '../models/analitica-impl';
import { OrinaImpl } from '../models/orina-impl';
import { SangreImpl } from '../models/sangre-impl';
import { Tipo } from '../models/tipo';
import { OrinaService } from '../service/orina.service';
import { SangreService } from '../service/sangre.service';

@Component({
  selector: 'app-analitica-form',
  templateUrl: './analitica-form.component.html',
  styleUrls: ['./analitica-form.component.css']
})
export class AnaliticaFormComponent implements OnInit {

  public analitica: AnaliticaImpl = new AnaliticaImpl(0, '', '', '');
  public analiticaForm: FormGroup;
  private host: string = environment.host;
  public urlEndPoint: string = `${this.host}usuarios`;

  public usuarios: UsuarioImpl[] = [];

  //public empleadoNombre:

  public tipos: Tipo[] = [
    { id: 0, description: 'Seleccione tipo de Analitica' },
    { id: 1, description: 'Orina' },
    { id: 2, description: 'Sangre' },
  ];

  submitted: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private usuarioService: UsuarioService,
    private sangreService: SangreService,
    private orinaService: OrinaService
  ) {
    this.analiticaForm = this.formBuilder.group({
      type: ['', Validators.required],
      date: ['', Validators.required],
      col: [0],
      ure: [0],
      den: [0],
      p_h: [0],
      user: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.usuarioService.getUsuarios().subscribe(
      (response) => {
        ;
        this.usuarios = this.usuarioService.extraerUsuarios(response);
        ;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  get form() {
    return this.analiticaForm.controls;
  }

  public onSubmit() {
    ;

    this.submitted = true;

    const servicioEntity = this.analiticaForm.value;
    ;
   /*  if (confirm('Revise los datos antes de aceptar')) { */
      ;
      if (!this.analiticaForm.invalid || true) {
        if (this.analiticaForm.value.type == 2) {
          const asan: SangreImpl = new SangreImpl(
            0,
            servicioEntity.date,
            servicioEntity.ure,
             servicioEntity.col,
            servicioEntity.url,
            servicioEntity.user


          );
          this.sangreService.create(asan).subscribe(
            () => {
            /*   console.log('OK'); */
            },
            (error: any) => {
            /*   console.error(error); */
            }
          );
        } else {
          const aori: OrinaImpl = new OrinaImpl(
            0,
            servicioEntity.date,
            servicioEntity.url,
            servicioEntity.den,
            servicioEntity.p_h,
            servicioEntity.user
          );
          this.orinaService.create(aori).subscribe(
            () => {
              /* console.log('OK'); */
            },
            (error) => {
            /*   console.error(error); */
            }
          );
        }
      }
   /*  } */

    //se para aqui si el formulario es invalido
    if (this.analiticaForm.invalid) {
      return;
    }
    //display si hay exito
   /*  alert(
      'GUARDADO CON EXITO' +
      JSON.stringify(this.analiticaForm.value, null, 4)
    ); */

    /* console.warn('Your order has been submitted', customerData); */
  }

  OnReset() {
    this.submitted = false;
    this.analiticaForm.reset();
  }

  cambiaTipo(event: any) {
    const val = event.currentTarget.value;
   /*  console.log(this.analiticaForm.value.type); */
    ;
    if (this.analiticaForm.value.type == 2) {
      this.analiticaForm = this.formBuilder.group({
        type: [this.analiticaForm.value.type, [Validators.required]],
        date: [
          this.analiticaForm.value.date,
          [Validators.required,
          Validators.maxLength(10),
          Validators.minLength(10),
        ]
        ],
        col: [
          this.analiticaForm.value.col,
          [Validators.required,
          Validators.maxLength(0),
          Validators.minLength(10)]
        ],
        ure: [
          this.analiticaForm.value.ure,
          [Validators.required,
          Validators.min(0),
          Validators.max(100),
        ]
        ],
        den: [],
        p_h: [],
        user: [this.analiticaForm.value.user, [Validators.required]]
      });
    } else {
      this.analiticaForm = this.formBuilder.group({
        type: [this.analiticaForm.value.type, [Validators.required]],
        date: [
          this.analiticaForm.value.date,
          [Validators.required,
          Validators.maxLength(10),
          Validators.minLength(10)]
        ],
        col: [],
        ure: [],
        den: [
          this.analiticaForm.value.den,
          [Validators.required,
          Validators.min(0),
          Validators.max(10)]
        ],
        p_h: [
          this.analiticaForm.value.p_h,
          [Validators.required,
          Validators.min(0),
          Validators.max(10)]
        ],
        user: [this.analiticaForm.value.user, [Validators.required]]
      });
    }
  }
}
function customerData(arg0: string, customerData: any) {
  throw new Error('Function not implemented.');
}

