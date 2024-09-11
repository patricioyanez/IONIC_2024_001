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
  n1 = '';
  n2 = '';
  resultado : any = 0;
  constructor(private toastController: ToastController) { 
    this.primerApellido = "Fernandez";
  }

  ngOnInit() {
  }
  limpiar()
  {
    this.resultado = this.n1 = this.n2 = '';
  }
  async sumar()
  {
    if(!this.n1 || !this.n2)
    {
      const mensaje = await this.toastController.create({
        message : 'Debe especificar un numero.',
        duration: 2000,
        position: 'bottom', // top y middle
        color: 'danger'
      });
      await mensaje.present();
      return;
    }
    this.resultado = this.n1 + this.n2;

    const mensaje = await this.toastController.create({
      message : 'El resultado de la suma es: ' + this.resultado,
      duration: 2000,
      position: 'bottom', // top y middle
    });
    await mensaje.present();
  }
    // Ejercicio 9:
    // Crear las operaciones aritmeticas *,/ y -, 
    // con diferentes iconos y colores,
    // validando los numero enviado mensaje adecuado

  // Ejercicio 10:
  // crear una nueva pagina que permita calcular el promedio de 3 notas,
  // mostrar si aprobó o no, según resultado obtenido.
  // usar alert si reprueba y toast si aprueba.

  async restar()
  {
    if(!this.n1 || !this.n2)
      {
        const mensaje = await this.toastController.create({
          message : 'Debe especificar un numero.',
          duration: 2000,
          position: 'bottom', // top y middle
          color: 'danger'
        });
        await mensaje.present();
        return;
      }
    this.resultado = Number(this.n1) - Number(this.n2);
  }
  async multiplicar()
  {
    if(!this.n1 || !this.n2)
    {
      const mensaje = await this.toastController.create({
        message : 'Debe especificar un numero.',
        duration: 2000,
        position: 'bottom', // top y middle
        color: 'danger'
      });
      await mensaje.present();
      return;
    }
    this.resultado = Number(this.n1) * Number(this.n2);
  }
  async dividir()
  {
    if(!this.n1 || !this.n2)
    {
      const mensaje = await this.toastController.create({
        message : 'Debe especificar un numero.',
        duration: 2000,
        position: 'bottom', // top y middle
        color: 'danger'
      });
      await mensaje.present();
      return;
    }
    if(Number(this.n2) != 0)
      this.resultado = Number(this.n1) / Number(this.n2);
    else
    {
      const toast = await this.toastController.create({
        message:'No se puede dividir por cero' ,
        duration: 3000,
        position:"middle", // top, middle
        color : "danger",
      });
      await toast.present();
    }
  }
}
