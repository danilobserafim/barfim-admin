import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ClientesService {
  data:any;
  constructor(private http: HttpClient ) { }
  getClientes(){
    this.data = this.http.get("https://backend-barfim-node.onrender.com/clientes/")
    return this.data
  }
  getCliente(id:any){
    this.data = this.http.get(`https://backend-barfim-node.onrender.com/clientes/${id}`)
    return this.data
  }
  postClientes(cliente: { nome: string, email: string, telefone: string }) {
    let options = {headers: {"content-type": "application/json; charset=utf-8", "access-control-allow-origin":"*"}}
    let body = { nome: cliente.nome, email: cliente.email, telefone: cliente.telefone }
    return this.http.post<any>('https://backend-barfim-node.onrender.com/clientes/', body, options )
}
}
