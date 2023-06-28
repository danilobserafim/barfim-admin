import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LojaService {
  data:any;
  constructor(private http: HttpClient ) { }
  getPordutos():Observable<any>{
    return this.http.get("https://backend-barfim-node.onrender.com/produtos")
  }
}
