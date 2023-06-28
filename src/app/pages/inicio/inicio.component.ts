import { Component, OnInit } from '@angular/core';
import { LocalService } from 'src/app/services/local.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {
  constructor(private localService: LocalService){}
  ngOnInit(): void {
    !localStorage.getItem("carrinho") && localStorage.setItem("carrinho", JSON.stringify([]))
  }

}
