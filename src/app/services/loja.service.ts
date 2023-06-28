import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LojaService {
  data:any;
  constructor(private http: HttpClient ) { }
  getPordutos():Observable<any>{
    return this.http.get("https://backend-barfim-node.onrender.com/produtos")
  }
  getCategorias():Observable<any>{
    return this.http.get("https://backend-barfim-node.onrender.com/categorias")
  }
  postPorduto(produto: {nome: string, descricao: string, valor: number, categoria: number, quantidade: number}):Observable<any>{
    let options = {headers: {"content-type": "application/json; charset=utf-8", "access-control-allow-origin":"*"}}
    let body = { nome: produto.nome, descricao: produto.descricao, categoria: produto.categoria, valor: produto.valor, quantidade: produto.quantidade }
    return this.http.post<any>('https://backend-barfim-node.onrender.com/produtos/', body, options )
  }
}
