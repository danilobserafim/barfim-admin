import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { VendasComponent } from './pages/vendas/vendas.component';
import { ClientesComponent } from './pages/clientes/clientes.component';
import { HttpClientModule } from "@angular/common/http";
import { VendaComponent } from './pages/venda/venda.component';
import { ClienteComponent } from './pages/cliente/cliente.component';
import { BtnBackComponent } from './components/btn-back/btn-back.component';
import { ModalCadastrarclienteComponent } from './pages/modal-cadastrarcliente/modal-cadastrarcliente.component';
import { ModalCadastrarvendaComponent } from './pages/modal-cadastrarvenda/modal-cadastrarvenda.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { TitleComponent } from './components/title/title.component';
import { LojaComponent } from './pages/loja/loja.component';
import { CommonModule } from '@angular/common';
import { CadastrarProdutoComponent } from './pages/cadastrar-produto/cadastrar-produto.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InicioComponent,
    VendasComponent,
    ClientesComponent,
    VendaComponent,
    ClienteComponent,
    BtnBackComponent,
    ModalCadastrarclienteComponent,
    ModalCadastrarvendaComponent,
    TitleComponent,
    LojaComponent,
    CadastrarProdutoComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
