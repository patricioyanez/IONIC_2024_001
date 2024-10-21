import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
/**
 * importa el modulo
 * HttpClientModule en el archivo app.module.ts
 */
@Injectable({
  providedIn: 'root'
})
export class ApirestService {

  private urlBase = 'https://jsonplaceholder.typicode.com/';
  listado : any = [];
  constructor(private httpClient:HttpClient) { }
  
  async getUsers()
  {
    const ruta = this.urlBase + 'users';
    return await firstValueFrom(this.httpClient.get(ruta));
  }  

}
