import { Component, OnInit, AfterContentChecked } from '@angular/core';
import { Router } from '@angular/router';
import { ClientesService } from 'src/app/services/clientes.service';
import { LojaService } from 'src/app/services/loja.service';
import { vendaModel } from "./venda.model";

@Component({
  selector: 'app-finalizar-venda',
  templateUrl: './finalizar-venda.component.html',
  styleUrls: ['./finalizar-venda.component.scss']
})
export class FinalizarVendaComponent implements OnInit, AfterContentChecked {
  vendaForm:vendaModel = new vendaModel( 0, 0)

  carrinho = JSON.parse(localStorage.getItem("carrinho") || "")
  total = JSON.parse(localStorage.getItem("total") || "")
  clientes: any = [];

  constructor(private lojaService: LojaService, private clienteService: ClientesService, private router: Router ) { }

  ngAfterContentChecked(): void {
    this.carrinho = JSON.parse(localStorage.getItem("carrinho") || "")
    this.total = JSON.parse(localStorage.getItem("total") || "")
    if (!this.carrinho[0]) {
      this.router.navigate(["loja"])
    }
  }

  ngOnInit(): void {
    this.carrinho = JSON.parse(localStorage.getItem("carrinho") || "")
    this.getClientesData()
  }

  getClientesData(){
    this.clienteService.getClientes().subscribe({
      next:(data: any) => {this.clientes = data.result}
    })
  }

  submit(){
    let id_cliente: number = this.vendaForm.id_cliente
    let desconto: number = this.vendaForm.desconto
    
    this.lojaService.postVenda(id_cliente, desconto).subscribe({
      next: (data)=>{
        this.lojaService.postCarrinho(data.insertId).subscribe({
          next:()=>{}
        })
        localStorage.removeItem('carrinho')
        alert("Deu certo")
        this.router.navigate(["/"])
      },
      error:()=>{alert("deu errado")}
    })
  }
}
