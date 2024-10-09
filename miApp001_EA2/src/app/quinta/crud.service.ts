import { Injectable, IterableDiffers } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor() { }

  async guardar(id:string, valor: any)
  {
    localStorage.setItem(id, valor );
  }
  async leer(id:string)
  {
    return localStorage.getItem(id);
  }
  async eliminar(id:string)
  {
    localStorage.removeItem(id)
  }
  async listar()
  {
    let listado : any = [];
    for(let i=0; i < localStorage.length; i++)
    {
      listado[i] = localStorage.getItem("" + i);
    }
    return listado;
  }
}
