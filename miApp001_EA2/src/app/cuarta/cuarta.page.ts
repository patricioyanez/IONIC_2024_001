import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
//import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-cuarta',
  templateUrl: './cuarta.page.html',
  styleUrls: ['./cuarta.page.scss'],
})
export class CuartaPage implements OnInit {
  id:string = '';
  nombre:string = '';
  //private storage: Storage
  constructor() { }

  ngOnInit() {
  }
  guardar()
  {
    localStorage.setItem(this.id, this.nombre);
//    this.storage.setItem(this.id, this.nombre);
  }
}
