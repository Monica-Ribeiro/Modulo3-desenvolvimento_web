import { Component } from '@angular/core';
import Produto from './models/produto';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public produtos: Produto[] = new Array<Produto>();

  constructor() {
    this.produtos.push(new Produto("Bombom no copo de chocolate",
                                    "https://guiadacozinha.com.br/wp-content/uploads/2019/10/bombom-copinho.jpg",
                                    "Bombom no copo de chocolate com muuuuito recheio",
                                    10.99));
    this.produtos.push(new Produto("Torta de frango",
                                    "https://receitamix.com/wp-content/uploads/2022/08/torta-de-frango-tudo-gostoso-.jpg",
                                    "Torta de frango com muuuuuito recheio",
                                    7.50));
    this.produtos.push(new Produto("Brigadeirão",
                                    "https://lirp.cdn-website.com/b1b2b34b/dms3rep/multi/opt/Receita-de-Brigadeir%C3%A3o-de-Forno-640w.jpg",
                                    "Brigadeirão inteiro com muuuuitos pedaços de morango",
                                    30.00));
    this.produtos.push(new Produto("Empadão de carne",
                                    "https://p2.trrsf.com/image/fget/cf/940/0/images.terra.com/2023/05/04/700826953-empadao-carne-desfiada.jpg",
                                    "Massa crocante por fora e fofinha por dentro com muuuuito recheio",
                                    45.99));
  }

}