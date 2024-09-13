import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
@Component({
  selector: 'app-ocho',
  templateUrl: './ocho.page.html',
  styleUrls: ['./ocho.page.scss'],
})
export class OchoPage implements OnInit {
  mostrar =false;
  n1= '';
  n2= '';
  n3= '';
  resultado: any = '';
  constructor(private toastController:ToastController) { }

  ngOnInit() {
  }
  async promediar()
  {
    this.resultado = this.n1 + this.n2 + this.n3;
    this.resultado = this.resultado/3;

    if(this.resultado < 40)
    {
        const toast = await this.toastController.create({
        message:'Reprobó' ,
        duration: 3000,
        position:"middle", // top, middle
        color : "danger",
      });
      await toast.present();
    }
    else
    {
      const toast = await this.toastController.create({
        message:'Aprobó' ,
        duration: 3000,
        position:"middle", // top, middle
        color : "primary",
      });
      await toast.present();
    }
  }
  verModal()
  {
    this.mostrar = !this.mostrar;
  }
}
