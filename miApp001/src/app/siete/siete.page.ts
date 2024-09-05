import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-siete',
  templateUrl: './siete.page.html',
  styleUrls: ['./siete.page.scss'],
})
export class SietePage implements OnInit {
  // string, number, boolean y any
  nombre = 'Juan';
  primerApellido:string;
  n1: number = 0;
  n2: number = 0;

  constructor() { 
    this.primerApellido = "Fernandez";
  }

  ngOnInit() {
  }

}
