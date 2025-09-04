// projeto.js

class Projeto {
    constructor(nome, cliente, equipe, status = "Em andamento") {
        this.nome = nome;
        this.cliente = cliente;
        this.equipe = equipe; // Um array de objetos Funcionario
        this.status = status;
    }

    toString() {
        const equipeNomes = this.equipe.map(func => func.nome).join(", ");
        return `Projeto: ${this.nome}\nCliente: ${this.cliente.nome}\nEquipe: ${equipeNomes}\nStatus: ${this.status}\n`;
    }
}

module.exports = Projeto;