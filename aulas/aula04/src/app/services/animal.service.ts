import { Injectable } from "@angular/core"
import { HttpClient } from "@angular/common/http"
import { Observable } from "rxjs"
import { Animal } from "../models/animal";
import { publishFacade } from "@angular/compiler";

@Injectable({
    providedIn: 'root'
})
export class AnimalService{
    constructor(private http: HttpClient) { }

    public getAnimais() : Observable<Animal[]>{
        return this.http.get<Animal[]>("http://localhost:8050/listar-animais");
    }
}

public adicionarAnimal(animal: Animal): Observable<string>{
    return this.http.post<string>("http://localhost:8050/adicionar=animal", animal);
}