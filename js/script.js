const novoCadastro = document.getElementById('btn-novo-vinho')



function ligarBotao() {
    let botao = novoCadastro

    if (botao) {
        botao.addEventListener('click', iniciarSistema)
    }

}
ligarBotao("btn-novo-vinho");



function textoDecadastro(mensagem) {
    let texto = prompt(mensagem);

    while (texto === null || texto === "") {
        alert("Entrada inválida: Digite algo por gentileza");
        texto = prompt(mensagem);
    }
    return texto;
}



function cadastrarVinho() {
    return textoDecadastro("Digite o nome do vinho: ");
}




function iniciarSistema() {
    cadastrarVinho()
}




//ligarBotao("btn-estoque");
//ligarBotao("btn-iniciar");

//if (document.body.classList.contains("pagina-inicial")) {
//    setTimeout(iniciarSistema, 600);
//}


// const apagou = document.getElementById('apagar')
// const resultado = document.getElementById('result')



// const produto = {
//     nome: 'Nathaly',
//     endereço: 'kennedy 3320',
//     sobrenome: 'Barbosa',
//     email: 'devnatbarbosa@gmail.com',
//     preco: 99.90,
// }

// // desestruturacao:
// console.log(produto.email)
// console.log(produto.nome)


// Lista - array
// const nomes = ['ana', 'joao', 'pedro']
// const valores = [1, 2.5, true, 'nome', {}, []]

// console.log(valores[0])

//array de objetos
//const produtos = [
//   {
//       nome: 'Nathaly',
//       sobrenome: 'Barbosa',
//       email: 'devnatbarbosa@gmail.com',
//   },
//   {
//       nome: 'Marco',
//       sobrenome: 'Antonio',
//       email: 'devmarcotoni@gmail.com',
//   },
//   {
//       nome: 'Rafael',
//       sobrenome: 'Queiroz',
//       email: 'rafaelqueiroz2012@gmail.com',
//  },
//]


//const listaProduto = document.getElementById('result')
//produtos.forEach((produto) => {
///   listaProduto.innerHTML += `
//      <div class='card'>
//        <h2>${produto.nome}</h2>
//          <p><strong>Sobrenome:</strong> ${produto.sobrenome}</p>
//        <p><strong>Email:</strong> ${produto.email}</p>
//    </div>
//`

//})



//produtos.forEach((produto) => {
//    console.log(produto.nome)
//
//})
//
//class Pessoa {
//   constructor(nome, idade) {
//       this.nome = nome;
//       this.idade = idade;
//   }
//   apresentar() {
//       console.log(`Ola, meu nome é ${this.nome} e tenho ${this.idade} anos.`)
//  }
///}
//const pessoa1 = new Pessoa('lucas', 32);
//pessoa1.apresentar();


//DOM - manipular do documetno (html -index)
//1 pegar o que vou manipular
//2 manipular o que peguei