import { Produto } from 'src/app/models/produto';
import { ProdutoService } from './../../../service/produto.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listagem-produtos',
  templateUrl: './listagem-produtos.component.html',
  styleUrls: ['./listagem-produtos.component.css']
})
export class ListagemProdutosComponent implements OnInit {
  constructor(private produtoService: ProdutoService){ }

  public produtos!: Produto[]

  ngOnInit(): void {
    this.produtoService.buscarProdutos().subscribe((response: Produto[]) => {
      this.produtos = response
    })
  }
}
