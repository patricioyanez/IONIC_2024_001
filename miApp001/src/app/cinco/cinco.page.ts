import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-cinco',
  templateUrl: './cinco.page.html',
  styleUrls: ['./cinco.page.scss'],
})
export class CincoPage implements OnInit {
  botones = ['Aceptar'];
  constructor(private alertController: AlertController) { }

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
}
