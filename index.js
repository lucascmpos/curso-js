
    // Meu primeiro código JS!
    console.log('Hello World');

    let nome = 'Nome'; // String literal
    console.log (nome);
   
       // Não podem ser palavra chave
       // Tem que ser significativas
       // Não pode começar com numeros
       // Não pode conter espaço ou hifen
       // Maiusculas e minusculas fazem diferença
   
   let primeiroNome = 'Nome';
   let ultimoNome = 'Sobrenome';
   
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
    if (i % 2 !== 0) // Se o que sobrou da divisão de i por 2, não for 0 (quer dizer que o numero é impar) irá mostrar a mensagem a seguir:
     console.log ('Ola');
}

                // WHILE LOOP

let i = 0;
while (i <= 5) { // Enquanto i for menor e igual a 5
    if (i % 2 !== 0) // E se for numero impar
    console.log ('Olá denovo!'); // Mostrar mensagem
    i++; // Acrescentar de volta no while, subindo novamente pro loop
}


                // DO-WHILE LOOP

let p = 0;  // Neste loop irá analisar o numero da variavel, e executar no minimo 1 vez.
do {
    if (p % 2 !==0)
    console.log ('Olá!!!');
    p++
} while (p <= 5); // Caso o número da variavel não se encaixe na condição while, o loop irá acabar, mostrando a mensagem apenas uma vez.


            // Exemplos de LOOP infinito, e como corrigi-los.
let n = 0;
while (n < 5) {
    console.log (n);
     n++;   //<<<<< Caso não implementado aqui, o loop se tornará infinito.
}

//for (let o = 0; o > 0; i++); // Caso "o" seja maior que 0, acrescentar mais um, rodando infinitamente.

                // FOR-IN LOOP

const person = {  // Definindo um objeto "pessoa"
    nome1: 'Nome',
    idade1: 30
};

for (let key in person)
    console.log(key, person[key]);

const cores = ['red', 'green', 'blue']; // Criando um array

for (let index in cores)
    console.log (index, cores[index]);




                // FOR-OF LOOP Versões atualizadas de JS

//for (let cores of cores) puxando a variavel cores do exemplo acima
    //console.log (cores);



                //BREAK-CONTINUE

let q = 0;
while (q <= 10){
    if(q === 5) break; // Se a variavel for igual a 5, quebrar o loop.

    console.log ('Variavel Q');
    q++;
}

let k = 0;
while (k <= 10){
    if(k % 2 === 0){ // Se a variavel for par
    k++; // adicionar mais um
    continue; // continuar de volta para o inicio do loop
    }
    
    console.log (k);
    k++;
}


                    // Função para retornar o maior numero, de uma forma pratica e resumida
let num = maximo(1, 2);
console.log(num);

function maximo(numero1, numero2) {
    return (numero1 > numero2) ? numero1 : numero2; //Verifique se o numero 1 é maior que 2, se sim, retorne numero1, se não, numero2.
}



                    // Exercicio FizzBuzz
// 1 Se o numero for divisivel por 3, aparece 'Fizz' 
// 2 Se divisivel por 5, aparece 'Buzz' 
// 3 Divisivel pelos dois, 'FizzBuzz'.                     
// 4 Caso não for divisivel por nenhum, aparece o numero.
// 5 Se não for numero, 'Not a number'
const output = fizzBuzz(10); 

console.log (output);

function fizzBuzz (input) {
    //5
    if (typeof input !== 'number')
    return NaN;

    //3
    if ((input % 3 === 0) && (input % 5 === 0))
    return 'FizzBuzz';
    //1
    if(input % 3 === 0)
    return 'Fizz';
    //2
    if (input % 5 === 0)
    return 'Buzz';
    //4
    return input;
}


// Limite de velocidade = 70
// 5km = 1 ponto
// Math.floor = transformar numero quebrado em numero inteiro
// 12 pontos = carteira suspensa

checkVel(80);

function checkVel(vel) {
const limiteVel = 70;
const kmporponto = 5;

    if (vel < limiteVel + kmporponto)
    console.log ('Ok');
    else {
        const pontos = Math.floor( (vel- limiteVel) / kmporponto);
        if (pontos >= 12)
        console.log ('Carteira suspensa');
        else
        console.log('Pontos', pontos);
    }


}
// Mostrar lista de 0 até o numero desejado, mostranndo se eles são pares ou impares.

mostrarNum(10);
function mostrarNum (limit) {
    for (let x = 0; x <= limit; x++) {
        const mensagem = (x % 2 === 0) ? 'PAR' : 'IMPAR';
        console.log (x, mensagem)
    }
}


                // ORIENTAÇÃO A OBJETOS


const circulo = {    // DEFININDO OBJETO
    radius: 1,
    location: { 
        x: 1,           // CARACTERISTICAS
        y: 1,       
    },
    isVisible: true,
    draw: function (){
        console.log ('draw');
    }
};

circulo.draw();   // CHAMANDO A FUNCAO DRAW DO OBJETO DE QUALQUER LUGAR DO CÓDIGO


// Factory Function : Simplificando 
function criarCirculo (radius){

return {    // DEFININDO OBJETO
    radius,        // Definindo RADIUS : RADIUS
    draw () {
        console.log ('draw');
    }
};
}

// Criando novas constantes atraves da função criar circulo acima. (Criando novos "circulos")

const circulo1 = criarCirculo(1);
console.log (circulo1);

const circulo2 = criarCirculo(2);
console.log (circulo2);

// Constuctor Function

function Circulo(radius) {
    this.radius = radius;
    this.draw = function (){
        console.log('draw');

    }
}

const circulO = new Circulo(1) // Criando novas constantes atraves da função acima


// String primitiva
const message = 'oi';

// String Objeto
const outra = new String('ola');


// Objeto Date

const now = new Date();
const date1 = new Date('Dezembro 13 2022 16:00');
const date2 = new Date(2022, 12, 13, 16, 0)   // Ano, Mes, Dia, Hora, Minuto

now.setFullYear(2022);


// Rua
// Cidade
// CEP

let endereco = {
    rua: 'a',
    cidade: 'b',
    cep: 'c'
};

function mostrarEndereco(endereco){
    for (let chave in endereco)
    console.log(chave, endereco[chave]);
}

mostrarEndereco(endereco);


// Factory Function do exercicio acima

let enderecO = criarEndereco ('a', 'b', 'c');

function criarEndereco(rua, cidade, cep){
    return{
        rua,
        cidade,
        cep
    };
}

const infoEndereco = criarEndereco(1);
console.log (infoEndereco);

// Constructor Function do exercicio acima

let enderEco = new Endereco('a', 'b', 'c');

function Endereco (rua, cidade, cep){
    this.rua = rua;
    this. cidade = cidade;
    this. cep = cep;
}

const novoEndereco = Endereco(1);
console.log (Endereco);


// Criar objeto de postagens de blog
// Titulo
// Corpo
// Autor
// Visualizacoes
// Comentarios

let post = {
    titulo: 'a',
    corpo: 'b',
    autor: 'c',
    visualizacoes: 10,
    comentarios: [
        {autor: 'a', corpo: 'b'},
        {autor: 'c', corpo: 'd'},
    ],
    estaON: true
};

// Mesmo exercicio acima, porem com Constructor Function.

let postagem = new Post('a', 'b', 'c');

console.log(postagem);

function Post(titulo, corpo, autor) {
    this.titulo = titulo;
    this.corpo = corpo;
    this.autor = autor;
    this.visualizacoes = 0;
    this.comentarios = [];
    this.estaON = false;
}

