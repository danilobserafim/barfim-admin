import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LojaService {
  data:any;
  constructor(private http: HttpClient ) { }

}
