import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { base_URL } from "../../../enviroment";

@Injectable({
  providedIn: 'root'
})
export class ClientesService {
  data:any;
  constructor(private http: HttpClient ) { }
  getClientes():Observable<any>{
    return this.http.get(`${base_URL}/clientes/`)
  }
  getCliente(id:any):Observable<any>{
    return this.http.get(`${base_URL}/clientes/${id}`)

  }
  postClientes(cliente: { nome: string, email: string, telefone: string }):Observable<any> {
    let options = {headers: {"content-type": "application/json; charset=utf-8", "access-control-allow-origin":"*"}}
    let body = { nome: cliente.nome, email: cliente.email, telefone: cliente.telefone }
    return this.http.post<any>(`${base_URL}/clientes/`, body, options )
}
}
