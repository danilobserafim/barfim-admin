import { Component, AfterContentChecked } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements AfterContentChecked {
  carrinho:any;
  range: number = 0;
  total: any;
  constructor(private route : ActivatedRoute, private router : Router ) {}
  ngAfterContentChecked(): void {
    this.carrinho = JSON.parse(localStorage.getItem("carrinho") || "")
    this.total = JSON.parse(localStorage.getItem("total") || "")
    this.range = this.carrinho.length
  }

  removerDoCarrinho(index: number){
    let total = 0
    let carrinho = JSON.parse(localStorage.getItem("carrinho") || "")
    this.carrinho.splice(index, 1)
    localStorage.setItem('carrinho',JSON.stringify(this.carrinho))
    carrinho = JSON.parse(localStorage.getItem("carrinho") || "")
    for (let index = 0; index < carrinho.length; index++) {
      total += carrinho[index].valor;      
   }
   localStorage.setItem("total", JSON.stringify(total.toFixed(2)))      
  }
  finalizarCompra(){
    this.router.navigate(['loja/finalizarCompra']);
  }
  parseFloat(data:string){
    return parseFloat(data).toFixed(2)
  }
  
}
