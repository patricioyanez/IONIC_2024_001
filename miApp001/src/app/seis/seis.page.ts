import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-seis',
  templateUrl: './seis.page.html',
  styleUrls: ['./seis.page.scss'],
})
export class SeisPage implements OnInit {

  nombre: string;
  edad : number;
  mensaje : string = "Es usuario premium"

  constructor() {
    this.nombre = "Ana Diaz";
    this.edad = 28;
  }

  ngOnInit() {
  }

}
