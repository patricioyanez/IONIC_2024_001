import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApirestService {

  private urlBase = 'https://jsonplaceholder.typicode.com/';
  listado : any = [];
  constructor(private httpClient:HttpClient) { }
  
  getUsers()
  {
    const ruta = this.urlBase + 'users';
    this.httpClient.get(ruta).subscribe((data=[])=> {this.listado=data});
    return this.listado;
  }
}
