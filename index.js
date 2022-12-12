
    // Meu primeiro código JS!
    console.log('Hello World');

    let nome = 'Lucas'; // String literal
    console.log (nome);
   
       // Não podem ser palavra chave
       // Tem que ser significativas
       // Não pode começar com numeros
       // Não pode conter espaço ou hifen
       // Maiusculas e minusculas fazem diferença
   
   let primeiroNome = 'Lucas';
   let ultimoNome = 'Campos';
   
   let interestRate = 0.3; // String numero
   interestRate = 1;
   console.log (interestRate);
   
   let aprovado = false; // Booleano, sim ou não
   

// Objeto
let pessoa = {
    nome: 'Lucas',
    idade: 19
};
console.log (pessoa);

// Array
let coresSelecionadas = ['red', 'blue'];
coresSelecionadas[2]= 'green';
console.log (coresSelecionadas);

// Função exibindo
function exibir(priNome, ultNome) {
    console.log('Olá ' + priNome + ' ' + ultNome);
}

exibir('Lucas', 'Campos');

// Função calculando
function calculo(numero) {
    return numero * numero;
}


console.log(calculo(2)); //Valor e exibindo

// Calculando

let x = 10;
let y = 3;

console.log (x + y);
console.log (x - y);
console.log (x * y);
console.log (x / y);
console.log (x % y);
console.log (x ** y);

    // x++ = x +1;

console.log (x > 0); // booleano
console.log (x >= 1);
console.log (x < 1);
console.log (x <= 1);

// Se um cliente tem mais de 100 pontos, é ouro. caso não, é prata.

let pontos = 101;
let type = pontos > 100 ? 'ouro': 'prata';

console.log(type);

// && retorna true caso todos operadores sejam true

let bomDesempenho = true;
let bomCredito = true;
let elegivel = bomDesempenho && bomCredito;

console.log (elegivel);

// || retorna true caso um dos operadores sejam true

let bomCarro = true;
let boaRoda = false;
let multa = bomCarro || boaRoda;

console.log (multa);

// ! se o operador for true, o "!" transformara ele em false

let boaAtividade = true;
let boaNota = !boaAtividade;

console.log (boaNota);

