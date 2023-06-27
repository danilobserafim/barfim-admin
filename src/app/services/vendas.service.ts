import { Injectable } from '@angular/core';
import { VendasData as VendasData } from '../models/vendasData';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class VendasService {
  data:VendasData | any = []
  
  constructor(private http: HttpClient) {}
  getVendas(): Observable<any> {
    this.data = this.http.get(`http://localhost:3000/vendas`);
    return this.data;
  }
  getVenda(id:any): Observable<any>{
    this.data = this.http.get(`http://localhost:3000/vendas/${id}`);
    return this.data;
  }
}
  