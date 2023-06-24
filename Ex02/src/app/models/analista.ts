import Funcionario from "./funcionario";

export default class Analista implements Funcionario {
    nome: string;
    cargo: string;
    funcional: Number;
    nomeGestor: string;

    constructor(nome: string, cargo: string, funcional: Number, nomeGestor: string) {
        this.nome = nome;
        this.cargo = cargo;
        this.funcional = funcional;
        this.nomeGestor = nomeGestor;
    }
}