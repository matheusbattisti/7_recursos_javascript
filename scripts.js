// 1 - promises
function loadSomeData() {
  return new Promise(function (resolve, reject) {
    // faz alguma operação assíncrona aqui
    // e chama a função resolve se for bem-sucedida,
    // ou a função reject se houver algum erro
    setTimeout(function () {
      var data = { id: 123, name: "Algum dado" };
      resolve(data);
    }, 1000);
  });
}

// agora podemos chamar a função loadSomeData e lidar com o resultado
loadSomeData()
  .then(function (data) {
    console.log("Dados carregados com sucesso:", data);
  })
  .catch(function (error) {
    console.error("Erro ao carregar dados:", error);
  });

//   2 - arrow function
// função tradicional
function soma(a, b) {
  return a + b;
}

console.log(soma(4, 4));

// arrow function equivalente
const somaB = (a, b) => a + b;

console.log(somaB(2, 3)); // 5

const numeros = [1, 2, 3, 4, 5];

// filtra apenas os números pares
const numerosPares = numeros.filter((numero) => numero % 2 === 0);

console.log(numerosPares); // [2, 4]

// 3 - destructuring
const usuario = {
  nome: "João",
  idade: 30,
  email: "joao@example.com",
};

// extrai o nome e o email do objeto usuario em variáveis separadas
const { nome, email } = usuario;

console.log(nome); // 'João'
console.log(email); // 'joao@example.com'

const numerosB = [1, 2, 3];

// extrai os elementos do array em variáveis separadas
const [a, b, c] = numerosB;

console.log(a); // 1
console.log(b); // 2
console.log(c); // 3

function exibeDadosUsuario({ nome, email }) {
  console.log(`Nome: ${nome}`);
  console.log(`E-mail: ${email}`);
}

const usuarioB = {
  nome: "João",
  idade: 30,
  email: "joao@example.com",
};

// chama a função com o objeto usuario como argumento
exibeDadosUsuario(usuarioB);

// 4 - template literals
const nomeUsuario = "João";
const idade = 30;

// cria uma string usando um template literal
const mensagem = `Olá, meu nome é ${nomeUsuario} e eu tenho ${idade} anos.`;

console.log(mensagem); // 'Olá, meu nome é João e eu tenho 30 anos.'

const saldo = 1000;

// cria uma string usando um template literal e uma expressão ternária
const mensagemB = `Seu saldo atual é ${saldo > 0 ? `$${saldo}` : "negativo"}.`;

console.log(mensagemB); // 'Seu saldo atual é $1000.'

// 5 - rest e spread
// rest
function somaC(...numeros) {
  return numeros.reduce((total, numero) => total + numero);
}

console.log(somaC(1, 2, 3, 4, 5)); // 15

const numeros1 = [1, 2, 3];
const numeros2 = [4, 5, 6];

// spread
// combina os dois arrays usando o operador spread
const numerosCombinados = [...numeros1, ...numeros2];

console.log(numerosCombinados); // [1, 2, 3, 4, 5, 6]

const usuarioC = {
  nome: "Pedro",
  idade: 30,
};

// copia o objeto usuario e adiciona uma nova propriedade
const usuarioComEndereco = { ...usuario, endereco: "Rua 1, nº 123" };

console.log(usuarioComEndereco); // { nome: 'Pedro', idade: 30, endereco: 'Rua 1, nº 123' }

// 6 - classes
class Pessoa {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }

  apresenta() {
    console.log(`Meu nome é ${this.nome} e eu tenho ${this.idade} anos.`);
  }
}

const pessoa1 = new Pessoa("João", 30);
const pessoa2 = new Pessoa("Maria", 25);

pessoa1.apresenta(); // 'Meu nome é João e eu tenho 30 anos.'
pessoa2.apresenta(); // 'Meu nome é Maria e eu tenho 25 anos.'

class Funcionario extends Pessoa {
  constructor(nome, idade, salario) {
    super(nome, idade);
    this.salario = salario;
  }

  apresenta() {
    console.log(
      `Meu nome é ${this.nome}, eu tenho ${this.idade} anos e meu salário é ${this.salario}.`
    );
  }
}

const funcionario1 = new Funcionario("Pedro", 35, 5000);
const funcionario2 = new Funcionario("Ana", 28, 4000);

funcionario1.apresenta(); // 'Meu nome é Pedro, eu tenho 35 anos e meu salário é 5000.'
funcionario2.apresenta(); // 'Meu nome é Ana, eu tenho 28 anos e meu salário é 4000.'

// 7 - métodos de array

// map
const numerosC = [1, 2, 3];

const numerosDobrados = numerosC.map((numero) => {
  return numero * 2;
});

console.log(numerosDobrados); // [2, 4, 6]

// filter
const numerosD = [1, 2, 3, 4, 5];

const numerosImpares = numerosD.filter((numero) => {
  return numero % 2 === 1;
});

console.log(numerosImpares); // [1, 3, 5]

// reduce
const numerosE = [1, 2, 3, 4, 5];

const somaNumeros = numerosE.reduce((total, numero) => {
  return total + numero;
}, 0);

console.log(somaNumeros); // 15

// find
const numerosF = [1, 2, 3, 4, 5];

const numero3 = numerosF.find((numero) => {
  return numero === 3;
});

console.log(numero3); // 3

// forEach
const nomes = ["Pedro", "Paulo", "Jeferson"];

nomes.forEach((nome) => {
  console.log(nome);
});
