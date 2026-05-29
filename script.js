const container = document.getElementById("container");

function mostrarResultado(titulo, resultado) {
    container.innerHTML += `
    <div class="card">
        <div class="titulo">${titulo}</div>
        <div class="resultado">${resultado}</div>
    </div>`;
}

// 21. Carrinho de Compras

class Produto {

    constructor(nome, preco) {

        this.nome = nome;

        this.preco = preco;

    }

}

class Carrinho {

    constructor() { this.produtos = []; }

    adicionar(produto) { this.produtos.push(produto); }

    calcularTotal() {

        return this.produtos.reduce((total, p) => total + p.preco, 0);

    }

}

const carrinho = new Carrinho();

carrinho.adicionar(new Produto("Notebook", 3000));

carrinho.adicionar(new Produto("Mouse", 120));

carrinho.adicionar(new Produto("Teclado", 250));

mostrarResultado(
    "EXERCÍCIO 21",
    `Produtos: Notebook, Mouse, Teclado
Total: R$ ${carrinho.calcularTotal().toFixed(2)}`
);


// 22. Biblioteca Digital

class Livro {

    constructor(titulo, autor) {

        this.titulo = titulo;

        this.autor = autor;

    }

}

class Biblioteca {

    constructor() { this.livros = []; }

    adicionar(livro) { this.livros.push(livro); }

    buscarPorAutor(nome) {

        return this.livros.filter(livro => livro.autor === nome);

    }

}

const biblioteca = new Biblioteca();

biblioteca.adicionar(new Livro("Dom Casmurro", "Machado de Assis"));

biblioteca.adicionar(new Livro("Memórias Póstumas de Brás Cubas", "Machado de Assis"));

biblioteca.adicionar(new Livro("O Pequeno Príncipe", "Antoine de Saint-Exupéry"));

const resultadoBusca = biblioteca.buscarPorAutor("Machado de Assis");

mostrarResultado(
    "EXERCÍCIO 22",
    `Autor: Machado de Assis
${resultadoBusca.map(livro => livro.titulo).join("\n")}`
);


// 23. Sistema de RPG

class Personagem {

    constructor(nome, vida, ataque) {

        this.nome = nome;

        this.vida = vida;

        this.ataque = ataque;

    }

    atacar(inimigo) {

        console.log(`${this.nome} ataca ${inimigo.nome}!`);

        inimigo.vida -= this.ataque;

    }

}

const personagem1 = new Personagem("Guerreiro", 100, 25);

const personagem2 = new Personagem("Orc", 80, 15);

personagem1.atacar(personagem2);

mostrarResultado(
    "EXERCÍCIO 23",
    `${personagem1.nome} ataca ${personagem2.nome}!
Vida de ${personagem2.nome}: ${personagem2.vida}`
);


// 24. Gestão de Frota

class Veiculo {

    constructor(modelo, manutencao) {

        this.modelo = modelo;

        this.manutencao = manutencao;

    }

}

class Empresa {

    constructor() { this.veiculos = []; }

    adicionar(veiculo) { this.veiculos.push(veiculo); }

    listarManutencao() {

        return this.veiculos.filter(veiculo => veiculo.manutencao === true);

    }

}

const empresa = new Empresa();

empresa.adicionar(new Veiculo("Caminhão Volvo", true));

empresa.adicionar(new Veiculo("Van Sprinter", false));

empresa.adicionar(new Veiculo("Fiorino", true));

const veiculosManutencao = empresa.listarManutencao();

mostrarResultado(
    "EXERCÍCIO 24",
    `Veículos para manutenção:
${veiculosManutencao.map(veiculo => veiculo.modelo).join("\n")}`
);


// 25. Override Complexo

class Funcionario {

    constructor(nome, salarioBase) {

        this.nome = nome;

        this.salarioBase = salarioBase;

    }

    calcularSalario() {

        return this.salarioBase;

    }

}

class Vendedor extends Funcionario {

    constructor(nome, salarioBase, comissao) {

        super(nome, salarioBase);

        this.comissao = comissao;

    }

    calcularSalario() {

        return this.salarioBase + this.comissao;

    }

}

class Diretor extends Funcionario {

    constructor(nome, salarioBase, bonus) {

        super(nome, salarioBase);

        this.bonus = bonus;

    }

    calcularSalario() {

        return this.salarioBase + this.bonus;

    }

}

const vendedor = new Vendedor("Marcos", 2500, 800);

const diretor = new Diretor("Fernanda", 9000, 3000);

mostrarResultado(
    "EXERCÍCIO 25",
    `Vendedor: ${vendedor.nome}
Salário: R$ ${vendedor.calcularSalario().toFixed(2)}

Diretor: ${diretor.nome}
Salário: R$ ${diretor.calcularSalario().toFixed(2)}`
);


// 26. Transferência Bancária

class ContaBancaria {

    constructor(titular, saldo) {

        this.titular = titular;

        this.saldo = saldo;

    }

    transferir(valor, contaDestino) {

        if (this.saldo >= valor) {

            this.saldo -= valor;

            contaDestino.saldo += valor;

            console.log(`Transferência de R$${valor} concluída.`);

        }

    }

}

const conta1 = new ContaBancaria("João", 1000);

const conta2 = new ContaBancaria("Maria", 500);

conta1.transferir(200, conta2);

mostrarResultado(
    "EXERCÍCIO 26",
    `Conta de João: R$ ${conta1.saldo.toFixed(2)}
Conta de Maria: R$ ${conta2.saldo.toFixed(2)}`
);


// 27. Agenda de Contatos

class Contato {

    constructor(nome, telefone) {

        this.nome = nome;

        this.telefone = telefone;

    }

}

class Agenda {

    constructor() { this.contatos = []; }

    adicionar(contato) { this.contatos.push(contato); }

    excluir(nome) {

        this.contatos = this.contatos.filter(contato => contato.nome !== nome);

    }

}

const agenda = new Agenda();

agenda.adicionar(new Contato("Ana", "1199999-1111"));

agenda.adicionar(new Contato("Carlos", "1198888-2222"));

agenda.adicionar(new Contato("Pedro", "1197777-3333"));

agenda.excluir("Carlos");

mostrarResultado(
    "EXERCÍCIO 27",
    `Contatos:
${agenda.contatos.map(contato => `${contato.nome} - ${contato.telefone}`).join("\n")}`
);


// 28. Sistema de Estacionamento

class Estacionamento {

    constructor(vagasTotais) {

        this.vagasTotais = vagasTotais;

        this.carros = [];

    }

    estacionar(carro) {

        if (this.carros.length < this.vagasTotais) {

            this.carros.push(carro);

            return true;

        }

        return false;

    }

}

const estacionamento = new Estacionamento(2);

const carro1 = estacionamento.estacionar("Honda Civic");

const carro2 = estacionamento.estacionar("Toyota Corolla");

const carro3 = estacionamento.estacionar("Volkswagen Golf");

mostrarResultado(
    "EXERCÍCIO 28",
    `Honda Civic: ${carro1 ? "Estacionado" : "Sem vaga"}
Toyota Corolla: ${carro2 ? "Estacionado" : "Sem vaga"}
Volkswagen Golf: ${carro3 ? "Estacionado" : "Sem vaga"}

Vagas ocupadas: ${estacionamento.carros.length}/${estacionamento.vagasTotais}`
);


// 29. Playlist

class Musica {

    constructor(nome, duracao) {

        this.nome = nome;

        this.duracao = duracao;

    }

}

class Playlist {

    constructor() { this.musicas = []; }

    adicionar(musica) { this.musicas.push(musica); }

    ordernarPorDuração() {

        return this.musicas.sort((a, b) => a.duracao - b.duracao);

    }

}

const playlist = new Playlist();

playlist.adicionar(new Musica("Música A", 240));

playlist.adicionar(new Musica("Música B", 180));

playlist.adicionar(new Musica("Música C", 300));

const musicasOrdenadas = playlist.ordernarPorDuração();

mostrarResultado(
    "EXERCÍCIO 29",
    `Playlist:
${musicasOrdenadas.map(musica => `${musica.nome} - ${musica.duracao}s`).join("\n")}`
);


// 30. Simulador de Elevador

class Elevador {

    constructor(totalAndares, capacidade) {

        this.andarAtual = 0;

        this.totalAndares = totalAndares;

        this.capacidade = capacidade;

        this.pessoas = 0;

    }

    entrar() {

        if (this.pessoas < this.capacidade) this.pessoas++;

    }

    subir() {

        if (this.andarAtual < this.totalAndares) this.andarAtual++;

    }

    descer() {

        if (this.andarAtual > 0) this.andarAtual--;

    }

}

const elevador = new Elevador(10, 4);

elevador.entrar();

elevador.entrar();

elevador.entrar();

elevador.subir();

elevador.subir();

elevador.descer();

mostrarResultado(
    "EXERCÍCIO 30",
    `Andar atual: ${elevador.andarAtual}
Pessoas no elevador: ${elevador.pessoas}
Capacidade: ${elevador.capacidade}`
);
