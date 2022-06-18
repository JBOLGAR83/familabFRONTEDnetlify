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
        date: ['', Validators.required],
        col: [''],
        ure: [''],
        den: [''],
        p_h: ['']
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
      (service)=>{
        debugger;
        console.log(service);
        this.analiticaForm = this.formBuilder.group({
          date: [service.fechaMuestra, Validators.required],
          col: [service.colesterol, Validators.required],
          ure: [service.urea, Validators.required],
        });
      },
     (error)=> {
      console.error(error);
     });
    }else{


      this.orinaService.findById(this.id).subscribe(
        (service)=>{
          debugger;
          console.log(service);

          this.analiticaForm = this.formBuilder.group({
            date: [service.fechaMuestra, Validators.required],
            den: [service.densidad, Validators.required],
            p_h: [service.ph, Validators.required],
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
          analiticaEntity.date,
          analiticaEntity.url,
          analiticaEntity.col,
          analiticaEntity.ure,
          analiticaEntity.usuario
        );
        debugger;
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
          analiticaEntity.date,
          analiticaEntity.url,
          analiticaEntity.den,
          analiticaEntity.p_h,
          analiticaEntity.usuario
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


