import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCadastrarvendaComponent } from './modal-cadastrarvenda.component';

describe('ModalCadastrarvendaComponent', () => {
  let component: ModalCadastrarvendaComponent;
  let fixture: ComponentFixture<ModalCadastrarvendaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalCadastrarvendaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalCadastrarvendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
