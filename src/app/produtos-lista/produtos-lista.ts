import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProdutoService, Produto } from '../services/produto.service';
import { MatCardModule } from '@angular/material/card';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-produtos-lista',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './produtos-lista.html',
  styleUrls: ['./produtos-lista.css']
})
export class ProdutosLista {
  produtos$!: Observable<Produto[]>; // 👈 reativo, com $ no nome

  constructor(private produtoService: ProdutoService) {}

  ngOnInit(): void {
    this.produtos$ = this.produtoService.listarProdutos();
  }
}


