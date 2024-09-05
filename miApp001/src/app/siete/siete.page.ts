import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

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
  resultado : number = 0;
  constructor(private toast: ToastController) { 
    this.primerApellido = "Fernandez";
  }

  ngOnInit() {
  }
  async sumar()
  {
    this.resultado = this.n1 + this.n2;

    const mensaje = await this.toast.create({
      message : 'El resultado de la suma es: ' + this.resultado,
      duration: 2000,
      position: 'bottom', // top y middle
    });
    await mensaje.present();


  }
  limpiar()
  {
    this.resultado = this.n1 = this.n2 = 0;
  }
    // Ejercicio 9:
    // Crear las operaciones aritmeticas *,/ y -, 
    // validando los numero enviado mensaje adecuado
}
