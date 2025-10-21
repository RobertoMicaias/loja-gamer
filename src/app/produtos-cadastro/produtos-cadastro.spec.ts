import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutosCadastro } from './produtos-cadastro';

describe('ProdutosCadastro', () => {
  let component: ProdutosCadastro;
  let fixture: ComponentFixture<ProdutosCadastro>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProdutosCadastro]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProdutosCadastro);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
