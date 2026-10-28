const vinhos = [];


function textoDecadastro(mensagem) {
    let texto = prompt(mensagem);

    while (texto === null || texto.trim() === "") {
        alert("Entrada inválida: digite algo.");
        texto = prompt(mensagem);
    }
    return texto.trim();
}

function numeroDeCadastro(mensagem) {
    let numero = parseInt(textoDecadastro(mensagem));

    while (isNaN(numero)) {
        alert("Digite apenas números.");
        numero = parseInt(textoDecadastro(mensagem));
    }
    return numero;
}

function tipoDeCadastro() {
    const tiposValidos = ["tinto", "branco", "rose", "rosé"];
    let tipo = textoDecadastro("Tipo (tinto, branco ou rosé):").toLowerCase();

    while (!tiposValidos.includes(tipo)) {
        alert("Tipo inválido! Digite tinto, branco ou rosé.");
        tipo = textoDecadastro("Tipo (tinto, branco ou rosé):").toLowerCase();
    }
    return tipo;
}

function adicionarVinho(nome, tipo, safra, estoque) {
    vinhos.push({ nome, tipo, safra, estoque });
}

function cadastrarVinho() {
    const nome = textoDecadastro("Nome do vinho:");
    const tipo = tipoDeCadastro();
    const safra = numeroDeCadastro("Safra:");
    const estoque = numeroDeCadastro("Estoque:");

    adicionarVinho(nome, tipo, safra, estoque);
}

function listarVinhos() {
    vinhos.forEach((vinho) => {
        console.log(`${vinho.nome} | ${vinho.tipo} | ${vinho.safra} | Estoque: ${vinho.estoque}`);
    });
}

function vinhosEstoqueBaixo() {
    return vinhos.filter((vinho) => vinho.estoque < 5);
}

function estoqueTotal() {
    return vinhos.reduce((total, vinho) => total + vinho.estoque, 0);
}

function nomesEmCaixaAlta() {
    return vinhos.map((vinho) => vinho.nome.toUpperCase());
}

do {
    cadastrarVinho();
} while (confirm("Deseja cadastrar outro vinho?"));

console.log("🍷 Lista completa:");
listarVinhos();

console.log("⚠️ Estoque abaixo de 5:", vinhosEstoqueBaixo());

console.log("📦 Estoque total:", estoqueTotal());

console.log("🔠 Nomes em caixa alta:", nomesEmCaixaAlta());

alert(`Estoque total: ${estoqueTotal()}`);