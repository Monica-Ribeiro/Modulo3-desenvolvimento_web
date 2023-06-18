export default class Produto {
    nome: string;
    imagem: string;
    descricao: string;
    valor: number;
    
    constructor(nome: string, imagem: string, descricao: string, valor: number) {
        this.nome = nome;
        this.imagem = imagem;
        this.descricao = descricao;
        this.valor = valor;
    }

}