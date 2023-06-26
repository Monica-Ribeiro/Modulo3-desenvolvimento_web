import { Component } from '@angular/core';
import Analista from './models/analista';
import Gestor from './models/gestor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ex02';

  public analistas: Analista[] = new Array<Analista>();
  public gestor: Gestor = new Gestor("Helena", "Gestora de Projetos", 789123, []);

  constructor() {
    this.analistas.push(new Analista("Amanda", "Analista de Segurança", 123059, this.gestor.nome));
    this.analistas.push(new Analista("Lucas", "Analista de Dados", 34503, this.gestor.nome));
    this.analistas.push(new Analista("André", "Analista de Cloud", 792134, this.gestor.nome));
    this.analistas.push(new Analista("Ana", "Analista de Cyber-Security", 321678, this.gestor.nome));
    this.analistas.push(new Analista("Mariana", "Analista de Infrasestrutura", 543876, this.gestor.nome));
    this.analistas.push(new Analista("Roberta", "Analista de Redes", 436932, this.gestor.nome));
    this.analistas.push(new Analista("Fernando", "Analista de Negócios", 190834, this.gestor.nome));
    this.analistas.push(new Analista("Diego", "Analista de Sistemas", 579753, this.gestor.nome));
    this.analistas.push(new Analista("Gustavo", "Analista de Qualidade", 453832, this.gestor.nome));
    this.gestor.nomeSubordinados = this.analistas.map(analistas => analistas.nome);
  }
}
