import { Component, AfterContentChecked } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements AfterContentChecked {
  carrinho:any;
  range: number = 0;
  mostrarCarrinho: boolean = false
  ngAfterContentChecked(): void {
    this.carrinho = JSON.parse(localStorage.getItem("carrinho") || "")
    this.range = this.carrinho.length
  }
  toggleCarrinho(){
    this.mostrarCarrinho = !this.mostrarCarrinho
  }
  removerDoCarrinho(index: number){
    let carrinho = JSON.parse(localStorage.getItem("carrinho") || "")
    this.carrinho.splice(index, 1)
    localStorage.setItem('carrinho',JSON.stringify(this.carrinho))
    if (index === 0) {
      this.mostrarCarrinho = false
    } 
      
  }
  
}
