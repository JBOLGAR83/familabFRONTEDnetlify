import { Component, Input, OnInit } from '@angular/core';
import { SangreImpl } from '../models/sangre-impl';

@Component({
  selector: 'app-sangre-item',
  templateUrl: './sangre-item.component.html',
  styleUrls: ['./sangre-item.component.css']
})
export class SangreItemComponent implements OnInit {
  @Input() sangre: SangreImpl = new SangreImpl(0,'','',0,0);
  constructor() { }

  ngOnInit(): void {
  }

}
