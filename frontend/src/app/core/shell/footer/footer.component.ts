import { Component, OnInit } from '@angular/core';
import { faGithub, faGitlab, faSkype, faTelegram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  faGITHUB = faGithub;

  faGITLAB = faGitlab;

  faWASHUP = faWhatsapp;

  faTELEGRAM = faTelegram;

  constructor() { }

  ngOnInit(): void {
  }

}
