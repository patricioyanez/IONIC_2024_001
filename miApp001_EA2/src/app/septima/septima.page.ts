import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-septima',
  templateUrl: './septima.page.html',
  styleUrls: ['./septima.page.scss'],
})
export class SeptimaPage implements OnInit {
/*
ver septima.module 
*/
  /*
  ejercicio de investigación 28: buscar e integrar libreria para lectura de QR
  al leer, mostrar la información en un text o label.

(barcodescanner)

(@capacitor/barcode-scanner)
crear octava pagina

traer cable usb para conectar celular android al PC.
Descargar e instalar :
https://www.dev47apps.com/droidcam/windows/
pc y android

Buscar numero de compilación (hacer 7 veces clic) y
activar modo depuración USB
Iniciar aplicaciones (reinicar app si esta ejecutandose)

JSON-SERVER
https://www.npmjs.com/package/json-server

instalar librería json-server, crear una carpeta y
crear archivo db.json con los datos a utilizar en la aplicación


Instalar plugin postman para probar json-server y sus rutas.
*/


  texto : any;
  constructor() { }

  ngOnInit() {
  }

}