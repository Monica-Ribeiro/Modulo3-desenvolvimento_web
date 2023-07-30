import { Component, OnInit } from '@angular/core';
import { Animal } from 'src/app/models/animal';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public animais: Animal[] = [];

  ngOnInit(): void {
      this.animais.push(new Animal(1, "Bolinha", "SRD", 4))
      this.animais.push(new Animal(1, "Bolinha", "SRD", 4))
      this.animais.push(new Animal(1, "Bolinha", "SRD", 4))
      this.animais.push(new Animal(1, "Bolinha", "SRD", 4))
  }

}
