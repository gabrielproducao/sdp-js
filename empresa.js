// empresa.js
const Funcionario = require('./funcionario');
const Cliente = require('./cliente');
const Projeto = require('./projeto');

class Empresa {
    constructor(nome) {
        this.nome = nome;
        this.funcionarios = [];
        this.clientes = [];
        this.projetos = [];
    }

    adicionarFuncionario(nome, cargo, especialidade) {
        const novoFuncionario = new Funcionario(nome, cargo, especialidade);
        this.funcionarios.push(novoFuncionario);
        console.log(`Funcionário ${nome} adicionado.`);
    }

    listarFuncionarios() {
        console.log(`\n--- Funcionários da ${this.nome} ---`);
        this.funcionarios.forEach(func => console.log(func.toString()));
        console.log("-----------------------------------");
    }
    
    adicionarCliente(nome, contato) {
        const novoCliente = new Cliente(nome, contato);
        this.clientes.push(novoCliente);
        console.log(`Cliente ${nome} adicionado.`);
    }

    listarClientes() {
        console.log(`\n--- Clientes da ${this.nome} ---`);
        this.clientes.forEach(cli => console.log(cli.toString()));
        console.log("----------------------------------\n");
    }

    criarProjeto(nomeProjeto, nomeCliente, equipeNomes) {
        // Encontra o cliente
        const clienteObj = this.clientes.find(c => c.nome === nomeCliente);
        if (!clienteObj) {
            console.log(`Erro: Cliente '${nomeCliente}' não encontrado.`);
            return;
        }

        // Encontra os funcionários da equipe
        const equipeObj = equipeNomes.map(nome =>
            this.funcionarios.find(f => f.nome === nome)
        );
        if (equipeObj.includes(undefined)) {
            console.log("Erro: Nem todos os funcionários foram encontrados. Verifique os nomes.");
            return;
        }

        const novoProjeto = new Projeto(nomeProjeto, clienteObj, equipeObj);
        this.projetos.push(novoProjeto);
        console.log(`Projeto '${nomeProjeto}' criado para o cliente '${nomeCliente}'.`);
    }

    listarProjetos() {
        console.log(`\n--- Projetos da ${this.nome} ---`);
        this.projetos.forEach(proj => console.log(proj.toString()));
        console.log("-----------------------------------");
    }

    buscarProjetosPorFuncionario(nomeFuncionario) {
        console.log(`\n--- Projetos de ${nomeFuncionario} ---`);
        const projetosDoFuncionario = this.projetos.filter(proj => 
            proj.equipe.some(func => func.nome === nomeFuncionario)
        );

        if (projetosDoFuncionario.length === 0) {
            console.log(`Nenhum projeto encontrado para ${nomeFuncionario}.`);
        } else {
            projetosDoFuncionario.forEach(proj => console.log(proj.toString()));
        }
        console.log("---------------------------------------");
    }
}

module.exports = Empresa;