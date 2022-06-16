import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { OrinaImpl } from '../models/orina-impl';
import { SangreImpl } from '../models/sangre-impl';
import { OrinaService } from '../service/orina.service';
import { SangreService } from '../service/sangre.service';

@Component({
  selector: 'app-edicion-analiticas',
  templateUrl: './edicion-analiticas.component.html',
  styleUrls: ['./edicion-analiticas.component.css']
})
export class EdicionAnaliticasComponent implements OnInit {

  public analiticaForm: FormGroup;
  type: number = 0;
  id: number = 0;

  constructor(private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private sangreService: SangreService,
    private orinaService: OrinaService) {
      this.analiticaForm = this.formBuilder.group({
        fechaMuestra: ['', Validators.required],
        colesterol: [],
        urea: [],
        densidad: [],
        ph: []
      })
     }

  ngOnInit(): void {
    debugger;
    this.id = this.route.snapshot.params['id'];
    this.type = parseInt(this.route.snapshot.params['type']);
    console.log(this.id);
    console.log(this.type);

    if(this.type === 2){


    this.sangreService.findById(this.id).subscribe(
      (analitica)=>{
        debugger;
        console.log(analitica);
        this.analiticaForm = this.formBuilder.group({
          fechaMuestra: [analitica.fechaMuestra, Validators.required],
          colesterol: [analitica.colesterol],
          urea: [analitica.urea],
        });
      },
     (error)=> {
      console.error(error);
     });
    }else{


      this.orinaService.findById(this.id).subscribe(
        (analitica)=>{
          debugger;
          console.log(analitica);

          this.analiticaForm = this.formBuilder.group({
            fechaMuestra: [analitica.fechaMuestra, Validators.required],
            densidad: [analitica.densidad],
            ph: [analitica.ph],
          });
        },
       (error)=> {
        console.error(error);
       });
    }
  }

  public onSubmit() {
    debugger;

    const analiticaEntity = this.analiticaForm.value;
    debugger;
    if (confirm('Realmente quiere añadir un nuevo elemento')){
      debugger;
    if (!this.analiticaForm.invalid) {
      if (this.type == 2) {
        const asan: SangreImpl = new SangreImpl(
          0,
          analiticaEntity.fechaMuestra,
          analiticaEntity.url,
          analiticaEntity.colesterol,
          analiticaEntity.urea
        );
          this.sangreService.update(asan,this.id ).subscribe(
            () => {
              debugger;
              console.log('OK');
            },
            (error:any) => {
              console.error(error);
            }
          );
      } else {
        const aori: OrinaImpl = new OrinaImpl(
          0,
          analiticaEntity.fechaMuestra,
          analiticaEntity.url,
          analiticaEntity.densidad,
          analiticaEntity.ph
        );
        this.orinaService.update(aori, this.id).subscribe(
          () => {
            debugger;
            console.log('OK');
          },
          (error) => {
            console.error(error);
          }
        );
      }
    }
    }
  }


}


