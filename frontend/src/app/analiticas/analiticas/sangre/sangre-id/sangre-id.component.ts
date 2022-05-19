import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sanngre-id',
  templateUrl: './sangre-id.component.html',
  styleUrls: ['./sangre-id.component.css']
})
export class SangreIdComponent implements OnInit {
  public sangreId = '';

  constructor(activateRoute: ActivatedRoute) {
  this.sangreId = activateRoute.snapshot.params['Idsangre'];

  }
  ngOnInit(): void {
  }

}
