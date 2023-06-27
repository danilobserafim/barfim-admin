import { Component, Input } from '@angular/core';
import { VendaModel } from './venda.model';

@Component({
  selector: 'app-modal-cadastrarvenda',
  templateUrl: './modal-cadastrarvenda.component.html',
  styleUrls: ['./modal-cadastrarvenda.component.scss']
})
export class ModalCadastrarvendaComponent {
  vendasForm:VendaModel = new VendaModel(0,[{"id_produto": ""}])


  back(){
    window.history.back()
  }
  postVenda(){

  }

}
