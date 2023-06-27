import { Component, OnInit,Input } from '@angular/core';
import { ClientesService } from 'src/app/services/clientes.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})
export class ClientesComponent implements OnInit {
  clientes:any;
  @Input() modal: any;
  toggleModal:any = ()=>{
      this.modal = !this.modal
  }
  constructor(private service: ClientesService){}
  ngOnInit(): void {
    this.getDados()
  }

  getDados(){
    this.service.getClientes().subscribe({
      next: (data: any) => {
      this.clientes = data.result
      }

      
    })    
    
  }

}
