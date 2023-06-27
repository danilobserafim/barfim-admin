import { Component } from '@angular/core';

@Component({
  selector: 'app-btn-back',
  templateUrl: './btn-back.component.html',
  styleUrls: ['./btn-back.component.scss']
})
export class BtnBackComponent {
  getBack(){
    window.history.back()
  }
}
