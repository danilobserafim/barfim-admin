import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { base_URL } from "../../../enviroment";



@Injectable({
  providedIn: 'root'
})
export class LojaService {
  data:any;

  constructor(private http: HttpClient ) { }

  getPordutos():Observable<any>{
    return this.http.get(`${base_URL}/produtos`)
  }

  getCategorias():Observable<any>{
    return this.http.get(`${base_URL}/categorias`)
  }

  postPorduto(produto: {nome: string, descricao: string, valor: number, categoria: number, quantidade: number}):Observable<any>{
    let options = {headers: {"content-type": "application/json; charset=utf-8", "access-control-allow-origin":"*"}}
    let body = { nome: produto.nome, descricao: produto.descricao, categoria: produto.categoria, valor: produto.valor, quantidade: produto.quantidade }
    return this.http.post<any>(`${base_URL}/produtos/`, body, options )
  }

  postVenda(venda: any):Observable<any>{

    let options = {headers: {"content-type": "application/json; charset=utf-8", "access-control-allow-origin":"*"}}

    let body = { cliente_id: venda.cliente_id, 
                valor_venda: venda.valor_venda, 
                desconto: venda.desconto, total: 
                venda.total, carrinho: 
                venda.carrinho }

    return this.http.post<any>(`${base_URL}/vendas/`, body, options )
  }

}
