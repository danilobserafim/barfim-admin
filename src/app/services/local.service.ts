import { Injectable } from '@angular/core';
import { base_URL } from "../../../enviroment";


@Injectable({
  providedIn: 'root'
})
export class LocalService {

  constructor() { }
  public setData(key:string, value:any){
    localStorage.setItem(key, value)
  }
  public getData(key:string){
    localStorage.getItem(key)
  }
  public removeData(key:string){
    localStorage.removeItem(key)
  }
  public clearData(){
    localStorage.clear()
  }
  
}
