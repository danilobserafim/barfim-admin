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
        },
      error:(err) => alert('Erro ao carregar os dados')
    })
    

  }
  addCarrinho(id: number, nome: string){
    let carrinho = JSON.parse(localStorage.getItem("carrinho") || "")
    localStorage.setItem("carrinho", JSON.stringify([...carrinho, {id: id, nome: nome}]))
  }

}
