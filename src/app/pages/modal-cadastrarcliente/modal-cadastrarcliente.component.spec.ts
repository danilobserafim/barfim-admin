import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCadastrarclienteComponent } from './modal-cadastrarcliente.component';

describe('ModalCadastrarclienteComponent', () => {
  let component: ModalCadastrarclienteComponent;
  let fixture: ComponentFixture<ModalCadastrarclienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalCadastrarclienteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalCadastrarclienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
