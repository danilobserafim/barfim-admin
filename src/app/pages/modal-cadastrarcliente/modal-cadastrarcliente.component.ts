import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ClientesService } from 'src/app/services/clientes.service';
import { clienteModel } from './cliente.model';

@Component({
  selector: 'app-modal-cadastrarcliente',
  templateUrl: './modal-cadastrarcliente.component.html',
  styleUrls: ['./modal-cadastrarcliente.component.scss'],
})
export class ModalCadastrarclienteComponent implements OnInit {
  @Input() modal?: any;
  @Input() toggleModal: any;
  clienteForm:clienteModel = new clienteModel("", "", "")
  constructor(private service: ClientesService) {}
  ngOnInit(): void {

    }
back(){
  window.history.back()
}
  postCliente() {
    this.service.postClientes({nome: this.clienteForm.nome, email: this.clienteForm.email, telefone: this.clienteForm.telefone, }).subscribe({
      next:()=>{ window.history.back()},
      error:()=>{alert("cliente já cadastrado")}
    })
     
  }
}
