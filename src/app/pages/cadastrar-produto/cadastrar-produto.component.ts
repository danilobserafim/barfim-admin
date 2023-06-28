import { Component, OnInit } from '@angular/core';
import { produtoModel } from "./produto.model";
import { LojaService } from 'src/app/services/loja.service';
@Component({
  selector: 'app-cadastrar-produto',
  templateUrl: './cadastrar-produto.component.html',
  styleUrls: ['./cadastrar-produto.component.scss']
})
export class CadastrarProdutoComponent implements OnInit {
  categorias:{id_categoria: number, nome_categoria: string}[] = []
  produtoForm:produtoModel = new produtoModel("", "", 0, 0, 0)
constructor(public service: LojaService){}
  ngOnInit(): void {
    this.getCategorias()
  }
postProduto(){
  this.service.postPorduto({ nome: this.produtoForm.nome, 
                            descricao: this.produtoForm.descricao, 
                            categoria: this.produtoForm.categoria, 
                            valor: this.produtoForm.valor, 
                            quantidade: this.produtoForm.quantidade 
    }).subscribe({
    next:()=>{ window.history.back()},
    error:()=>{alert("algo deu errado")}
    })
}
getCategorias(){
  this.service.getCategorias().subscribe({
    next:data=>{
      this.categorias = data
    },
    error:err=>{
      alert('erro')
    }
  })
}
}
