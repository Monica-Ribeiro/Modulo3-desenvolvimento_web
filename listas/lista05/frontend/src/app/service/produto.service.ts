import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http"
import { Observable } from "rxjs";
import { Produto } from "../models/produto";

@Injectable({
  providedIn: "root"
})
export class ProdutoService {

  constructor(private http: HttpClient){ }

  public buscarProdutos(): Observable<Produto[]> {
    return this.http.get<Produto[]>("http://localhost:5000/listar-produtos")
  }

}

