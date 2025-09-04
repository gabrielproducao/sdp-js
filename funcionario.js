// funcionario.js

class Funcionario {
    constructor(nome, cargo, especialidade) {
        this.nome = nome;
        this.cargo = cargo;
        this.especialidade = especialidade;
    }

    toString() {
        return `Nome: ${this.nome} | Cargo: ${this.cargo} | Especialidade: ${this.especialidade}`;
    }
}

module.exports = Funcionario;