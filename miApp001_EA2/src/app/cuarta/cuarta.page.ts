import { Component, OnInit } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';

// instalar: npm install @ionic/storage-angular
//import { Storage } from '@ionic/storage-angular';
// y en app.module agregar
// import { IonicStorageModule } from '@ionic/storage-angular';
// tambien en @NgModule({ 
// imports: [HttpClientModule, BrowserModule, IonicModule.forRoot(), AppRoutingModule, IonicStorageModule.forRoot()],


@Component({
  selector: 'app-cuarta',
  templateUrl: './cuarta.page.html',
  styleUrls: ['./cuarta.page.scss'],
})
export class CuartaPage implements OnInit {
  id:string = '';
  nombre:string = '';
  //private storage: Storage
  constructor(private alertController:AlertController,
              private toastController:ToastController
  ) { }

  ngOnInit() {
  }
  async guardar()
  {// validar

    if(this.id == "" || this.nombre == "")
    {
      const alert = await this.alertController.create({
        header: 'Error',
        subHeader: 'Valor Id o nombre',
        message: 'El valor del id o del nombre no es válido',
        buttons: ['Aceptar']
      });
      await alert.present();
    }
    else
    {
      localStorage.setItem(this.id, this.nombre);
//    this.storage.setItem(this.id, this.nombre);
      const toast = await this.toastController.create({
        header: 'Información',
        message: 'Los datos fueron guardados',
        icon: 'checkmark-circle-outline',
        duration: 2000,
        color: 'success',
        position: 'middle',
        buttons: ['Aceptar']
      });
      await toast.present();
    }
  }
}
