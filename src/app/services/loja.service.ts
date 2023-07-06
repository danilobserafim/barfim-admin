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
  getCategoria(id:number):Observable<any>{
    return this.http.get(`${base_URL}/categorias/${id}`)
  }

  postPorduto(produto: {nome: string, descricao: string, valor: number, categoria: number, quantidade: number}):Observable<any>{
    let options = {headers: {"content-type": "application/json; charset=utf-8", "access-control-allow-origin":"*"}}
    let body = { nome: produto.nome, descricao: produto.descricao, categoria: produto.categoria, valor: produto.valor, quantidade: produto.quantidade }

    return this.http.post<any>(`${base_URL}/produtos/`, body, options )
  }

  postVenda(id_cliente:any, desconto:any):Observable<any>{
    let total = JSON.parse(localStorage.getItem("total")||"")
    let options = {headers: {"content-type": "application/json; charset=utf-8", "access-control-allow-origin":"*"}}
    let bodyVenda = { cliente_id: id_cliente, valor_venda: total, total: (total - desconto).toFixed(2), desconto: desconto,
                      }
    return this.http.post<any>(`${base_URL}/vendas/`, bodyVenda, options )
  }
  postCarrinho(insertId:number):Observable<any>{
    const carrinho = JSON.parse(localStorage.getItem("carrinho") || "")
    const options = {headers: {"content-type": "application/json; charset=utf-8", "access-control-allow-origin":"*"}}
    const bodyCarrinho = { carrinho: carrinho, venda_id: insertId}

    return this.http.post<any>(`${base_URL}/carrinhos`, bodyCarrinho, options )
  }

}
