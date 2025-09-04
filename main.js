// main.js
const Empresa = require('./empresa');

const main = () => {
    // 1. Instanciando a empresa
    const nexusTech = new Empresa("Nexus Tech Soluções");
    console.log(`Empresa '${nexusTech.nome}' criada com sucesso!\n`);

    // 2. Adicionando funcionários
    nexusTech.adicionarFuncionario("Alice", "Gerente de Projetos", "Gestão Ágil");
    nexusTech.adicionarFuncionario("Bruno", "Desenvolvedor", "Node.js, Back-end");
    nexusTech.adicionarFuncionario("Carla", "Designer UI/UX", "Design Digital");
    nexusTech.adicionarFuncionario("Daniel", "Desenvolvedor", "JavaScript, Front-end");
    nexusTech.adicionarFuncionario("Eduardo", "Especialista em Redes", "Infraestrutura");

    nexusTech.listarFuncionarios();
    
    // 3. Adicionando clientes
    nexusTech.adicionarCliente("Supermercado Ideal", "joao.ideal@email.com");
    nexusTech.adicionarCliente("Academia Corpo Forte", "contato@corpoforte.com");
    
    nexusTech.listarClientes();

    // 4. Criando projetos
    nexusTech.criarProjeto(
        "E-commerce Super Ideal",
        "Supermercado Ideal",
        ["Alice", "Bruno", "Carla", "Daniel"]
    );
    
    nexusTech.criarProjeto(
        "App Academia Móvel",
        "Academia Corpo Forte",
        ["Alice", "Bruno", "Daniel"]
    );

    nexusTech.listarProjetos();

    // 5. Demonstração de funcionalidades extras
    nexusTech.buscarProjetosPorFuncionario("Alice");
    nexusTech.buscarProjetosPorFuncionario("Eduardo");
};

main();