
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
   
   let interestRate = 0.3; // Numeral
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

        // Caso tenha a corUsuario, ela sera usada, caso não, será a corPadrao.
        let corUsuario = undefined;
        let corPadrao = 'blue';
        let corAgora = corUsuario || corPadrao;

        console.log (corAgora);

// ! se o operador for true, o "!" transformara ele em false

let boaAtividade = true;
let boaNota = !boaAtividade;

console.log (boaNota);

//Inverter a para blue, e b para red
let a = 'red'
let b = 'blue'

    //Resolução
    let c = a;
    a = b;
    b = c;

console.log(a);
console.log(b);

                // IF-ELSE

// Se o horário estiver entre 6 as 12: Bom dia!
// Se o horario estiver entre 12 e 18: Boa tarde!
// Se não: Boa noite!


let hora = 10;

if (hora >= 6 && hora < 12) 
    console.log ('Bom dia!');

else if (hora >= 12 && hora < 18) 
    console.log ('Boa tarde!');

else 
    console.log ('Boa noite!');



            // SWITCH-CASE
// Se o usuario for convidado: Usuario convidado
// Se o usuario for moderador: Usuario moderador
// Se não: Usuario desconhecido


let posicao = 'convidado';

switch (posicao) {
    case 'convidado':
        console.log ('Usuario convidado');
        break;

    case 'moderador':
        console.log ('Usuario moderador');
        break;
        
    default:
        console.log ('Usuario desconhecido');
}

        // Mesmo exercicio em IF-ELSE
        if (posicao === 'convidado') console.log('Convidado');
        else if (posicao === 'moderador') console.log ('Moderador');
        else console.log ('Usuario desconhecido')


                // FOR LOOP

for (let i = 0; i < 5; i++) { //Setando a variavel i para 0, enquanto a variavel i for menor que 5, acrescentar +1
    console.log ('Ola mundo'); // O que acontece enquanto a variavel i for <5
}

for (let i = 0; i <=5; i++) {
    if (i % 2 !== 0) // Se o que sobrou da divisão de i por 2, não for 0 (quer dizer que o numero é primo) irá mostrar a mensagem a seguir:
     console.log ('Ola');
}

                // WHILE LOOP

let i = 0;
while (i <= 5) { // Enquanto i for menor e igual a 5
    if (i % 2 !== 0) // E se for numero primo
    console.log ('Olá denovo!'); // Mostrar mensagem
    i++; // Acrescentar de volta no while, subindo novamente pro loop
}