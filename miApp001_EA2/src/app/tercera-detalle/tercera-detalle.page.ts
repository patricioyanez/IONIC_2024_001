import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tercera-detalle',
  templateUrl: './tercera-detalle.page.html',
  styleUrls: ['./tercera-detalle.page.scss'],
})
export class TerceraDetallePage implements OnInit {
  personas = [
    {
      id    : 1,
      nombre: 'juan',
      edad  : 25,
      foto  : 'https://img.freepik.com/foto-gratis/retrato-estudio-hombre-moreno-confianza_1187-5799.jpg?w=2000'
    },
    {
      id    : 2,
      nombre: 'Diana',
      edad  : 30,
      foto  : 'https://image.shutterstock.com/image-photo/happy-young-woman-sitting-on-260nw-2018571389.jpg'

    },
    {
      id    : 3,
      nombre: 'Pedro',
      edad  : 45,
      foto  : 'https://img.freepik.com/foto-gratis/apuesto-hombre-empresario-sonriendo-alegre_176420-17877.jpg?w=2000'

    }
  ]
  persona: any;
  constructor(private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    // ejercicio 16: capturar el valor del parametro y
    // obtener la persona según id
    this.activatedRoute.paramMap.subscribe( x => {
      const id = Number(x.get("id"));
      this.persona = this.personas.find( xx => xx.id == id);
    })

    console.log(this.persona);
  }
// ejercicio 17: agregar 2 botones x o ❤ y enviar mensaje con
// toast y alertController
}
