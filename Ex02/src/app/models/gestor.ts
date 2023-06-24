import Funcionario from "./funcionario";

export default class Gestor implements Funcionario {
    nome: string;
    cargo: string;
    funcional: Number;
    nomeSubordinados: string[];

    constructor(nome: string, cargo: string, funcional: Number, nomeSubordinados: string[]) {
        this.nome = nome;
        this.cargo = cargo;
        this.funcional = funcional;
        this.nomeSubordinados = nomeSubordinados;
    }
}