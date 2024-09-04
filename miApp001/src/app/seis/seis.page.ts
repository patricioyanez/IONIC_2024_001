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

  asignaturas = [
    {nombre: "PGY4121", nota: 39.5},
    {nombre: "PGY2121", nota: 45},
    {nombre: "mdy3101", nota: 50},
  ]


  constructor() {
    this.nombre = "Ana Diaz";
    this.edad = 28;
  }

  ngOnInit() {
  }

}
