import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClientesService } from 'src/app/services/clientes.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.scss']
})
export class ClienteComponent implements OnInit {
  page : any;
  cliente : any;
  noPage: boolean = false
  @Input() modal:any;
  toggleModal:any = ()=>{
    this.modal = !this.modal
    
  }
    constructor(private route: ActivatedRoute, private service: ClientesService){}
  ngOnInit(): void {
   this.getCliente()
  }
  getCliente(){
    this.route.paramMap.subscribe(data=>{
      this.page = data.get("id")
      this.service.getCliente(this.page).subscribe({
        next: (data: any) =>{
          this.cliente = data
        },
        error: ()=>{
          this.noPage = true
        }
      })
      
    })
  }

}
