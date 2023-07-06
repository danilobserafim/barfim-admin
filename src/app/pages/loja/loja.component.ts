import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { LojaService } from 'src/app/services/loja.service';

@Component({
  selector: 'app-loja',
  templateUrl: './loja.component.html',
  styleUrls: ['./loja.component.scss']
})
export class LojaComponent implements OnInit, OnChanges {
  produtos:any = [0]
  categorias: any = []
  categoriaSelecionada: any = 0
  constructor(private service: LojaService ) { }

  ngOnChanges(): void {
    this.mudaCategoria()
  }
  ngOnInit(): void {
    this.getProdutos()
    this.getCategorias()
  }

  getProdutos(){
    this.service.getPordutos().subscribe({
      next: (data)=>  { this.produtos =  data
        }
    })
  }
  addCarrinho(id: number, nome: string, valor: number){
    let carrinho = JSON.parse(localStorage.getItem("carrinho") || "")
    localStorage.setItem("carrinho", JSON.stringify([...carrinho, {id: id, nome: nome, valor: valor}]))
    carrinho = JSON.parse(localStorage.getItem("carrinho") || "")

    let total: number = 0; 
    for (let index = 0; index < carrinho.length; index++) {
       total += carrinho[index].valor;      
    }
       localStorage.setItem("total", JSON.stringify(total.toFixed(2)))      
  }
  parseFloat(data:string){
    return parseFloat(data).toFixed(2)
  }
  getCategorias(){
    this.service.getCategorias().subscribe({
      next: data =>{
        this.categorias = data
      }
    })
  }
  getCategoria(){
    this.service.getCategoria(this.categoriaSelecionada).subscribe({
      next: data =>{
        this.produtos = data.produtos
      },
      error:(error)=>{this.produtos = [0]}
    })
  }
  mudaCategoria(){
    if (this.categoriaSelecionada == "0") {
      this.getProdutos()
    }else{
      this.getCategoria()
    }
  }

}
