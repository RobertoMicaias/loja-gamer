import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ProdutoService } from '../services/produto.service';

@Component({
  selector: 'app-produtos-cadastro',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './produtos-cadastro.html',
  styleUrls: ['./produtos-cadastro.css']
})
export class ProdutosCadastroComponent {
  produto = { nome: '', descricao: '', preco: 0 };
  sucesso = false;

  constructor(private produtoService: ProdutoService) {}

  cadastrarProduto(): void {
    this.produtoService.cadastrarProduto(this.produto).subscribe({
      next: () => {
        console.log('Produto cadastrado com sucesso!');
        this.sucesso = true;
        this.produto = { nome: '', descricao: '', preco: 0 };
      },
      error: (erro) => console.error('Erro ao cadastrar produto:', erro)
    });
  }

  novoCadastro(): void {
    this.sucesso = false;
  }
}

