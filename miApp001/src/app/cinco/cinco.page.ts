import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-cinco',
  templateUrl: './cinco.page.html',
  styleUrls: ['./cinco.page.scss'],
})
export class CincoPage implements OnInit {
  botones = ['Aceptar'];
  numero : number;
  numero2: number = 10;

  constructor(private alertController: AlertController) { 
    this.numero = 0;
  }

  ngOnInit() {
  }
  async funcionAlerta()
  {
    const alert = await this.alertController.create({
      header    : "Alerta usando AlertController",
      subHeader : "Subtitulo",
      message   : "Ejemplo de como crear un alerta usando la clase AlertController de Angular",
      buttons   : ['Ok']
    });

    await alert.present();
  }

  incrementar()
  {
    this.numero++;
  }
}
