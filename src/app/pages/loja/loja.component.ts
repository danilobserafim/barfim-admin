import { Component, OnInit } from '@angular/core';
import { LojaService } from 'src/app/services/loja.service';

@Component({
  selector: 'app-loja',
  templateUrl: './loja.component.html',
  styleUrls: ['./loja.component.scss']
})
export class LojaComponent implements OnInit {
  produtos:any = []
  constructor(private service: LojaService ) { }
  ngOnInit(): void {
    this.getProdutos()
  }
  getProdutos(){
    this.service.getPordutos().subscribe({
      next: (data)=>  {this.produtos =  data
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

}
