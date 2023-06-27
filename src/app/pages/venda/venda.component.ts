import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VendasService } from 'src/app/services/vendas.service';

@Component({
  selector: 'app-venda',
  templateUrl: './venda.component.html',
  styleUrls: ['./venda.component.scss']
})
export class VendaComponent implements OnInit {
  page:any = ''
  venda:any;
  constructor(private route: ActivatedRoute, private service: VendasService){}
  ngOnInit(): void {
    this.getVenda()
  }
    getVenda(){
      this.route.paramMap.subscribe(data=>{
        this.page = data.get("id")
        this.service.getVenda(this.page).subscribe({
          next: data =>{
            this.venda = data
            
          }
        })
        
      })
    }
    getBack(){
      window.history.back();
    }
}
