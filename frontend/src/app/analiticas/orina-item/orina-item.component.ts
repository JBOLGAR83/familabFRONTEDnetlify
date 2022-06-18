import { Component, Input, OnInit } from '@angular/core';
import { OrinaImpl } from '../models/orina-impl';

@Component({
  selector: 'app-orina-item',
  templateUrl: './orina-item.component.html',
  styleUrls: ['./orina-item.component.css']
})
export class OrinaItemComponent implements OnInit {
  @Input() orina: OrinaImpl = new OrinaImpl(0,'','',0,0,'');
  constructor() { }

  ngOnInit(): void {
  }

}
