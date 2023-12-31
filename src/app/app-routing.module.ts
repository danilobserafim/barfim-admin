import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { VendasComponent } from './pages/vendas/vendas.component';
import { ClientesComponent } from './pages/clientes/clientes.component';
import { VendaComponent } from './pages/venda/venda.component';
import { ClienteComponent } from './pages/cliente/cliente.component';
import { ModalCadastrarclienteComponent } from './pages/modal-cadastrarcliente/modal-cadastrarcliente.component';
import { LojaComponent } from './pages/loja/loja.component';
import { CadastrarProdutoComponent } from './pages/cadastrar-produto/cadastrar-produto.component';
import { FinalizarVendaComponent } from './pages/finalizar-venda/finalizar-venda.component';

const routes: Routes = [
  {
    path: '',
    component: InicioComponent,
    pathMatch: 'full' 
  },
  {
    path: 'vendas',
    component: VendasComponent,


  },
  {
    path: 'vendas/:id',
    component: VendaComponent

  },
  {
    path: 'clientes',
    component: ClientesComponent

  },
  {
    path: 'clientes/cadastrar',
    component: ModalCadastrarclienteComponent

  },
  {
    path: 'clientes/:id',
    component: ClienteComponent

  },
  {
    path: 'loja',
    component: LojaComponent

  },
  {
    path: 'loja/cadastrar',
    component: CadastrarProdutoComponent

  },
  {
    path: 'loja/finalizarCompra',
    component: FinalizarVendaComponent

  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
