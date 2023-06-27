import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { VendasData } from 'src/app/models/vendasData';
import { VendasService } from 'src/app/services/vendas.service';

@Component({
  selector: 'app-vendas',
  templateUrl: './vendas.component.html',
  styleUrls: ['./vendas.component.scss'],
})
export class VendasComponent implements OnInit {
  dataVendas: VendasData | any = [];
  @Input() modal: any;
  toggleModal: any = () => {
    this.modal = !this.modal;
  };
  constructor(private service: VendasService, private router: Router) {}
  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.getDados();
  }
  getDados() {
    this.service.getVendas().subscribe({
      next: (data) => {
        this.dataVendas = data;
      },
    });
  }
}
