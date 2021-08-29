
// Exercicio 1
// Escreva um programa que mostre na tela a mensagem "Olá, Mundo!"
// alert("Olá, mundo!");

// Exercicio 2
// Faça um programa que leia o nome de uma pessoa e mostre uma mensagem de boasvindas para ela:
// let nameUser = prompt("Qual seu nome?");
// alert("Seja bem vindo, " + nameUser + " !");

// Exercicio 3
// Crie um programa que leia o nome e o salário de um funcionário, mostrando no final uma mensagem.
// let nameUser = prompt("Digite seu nome: ");
// let salario = prompt("Digite seu salario (Ex: 1000,00) : ");
// alert("Nome do funcionário(a) : "+ nameUser + "\nSalário : R$"+  salario +" \nO(a) funcionário(a) "+ nameUser +" tem um salário de R$"+ salario +" em Junho." );

// Exercicio 4
// Desenvolva um algoritmo que leia dois números inteiros e mostre o somatório entre eles.
// let numero1 = parseInt(prompt("Digite o primeiro numero"));
// let numero2 = parseInt(prompt("Digite o segundo numero"));
// let soma = (numero1+numero2);
// alert('A soma entre os dois números é ' + soma);

// Exercicio 5
// Faça um programa que leia as duas notas de um aluno em uma matéria e mostre na tela a sua média na disciplina.
// let nota1 = parseInt(prompt('Digite a primeira nota'));
// let nota2 = parseInt(prompt('Digite a segunda nota'));
// alert('Sua média é '+ (nota1+nota2)/2);

// Exericio 6
// Faça um programa que leia um número inteiro e mostre o seu antecessor e seu sucessor.
// let numero = parseInt(prompt('Digite o número'));
// alert('Número digitado: '+numero+'\n Seu antecessor é  '+(numero-1)  +'\n Seu sucessor é '+(numero+1));

// Exercise seven
// Crie um algoritmo que leia um número real e mostre na tela o seu dobro e a sua terça parte.
// let numero = prompt("Digite o número");
// alert('Número digitado: '+numero+'\nO dobro desse número é: '+(numero*2)+'\nE sua terça parte é: '+(numero/3));

// Exercise eigth
// Desenvolva um programa que leia uma distância em metros e mostre os valores relativos em outras medidas.
// let distancia = prompt('Digite a distância:');
// alert('A distância de '+distancia+' corresponde a: '+
//         '\nKm: '+(distancia/1000)+' Quilômetros'+'         Dm: '+(distancia*10)+' Decimetros'+
//         '\nHm: '+(distancia/100)+' Hectômetros'+'         Cm: '+(distancia*100)+' Centimetros'+
//         '\nDam: '+(distancia/10)+' Decâmetros'+'         Mm: '+(distancia*1000)+' Milimetro');

// Exercise nine
// Faça um algoritmo que leia quanto dinheiro uma pessoa tem na carteira (em R$) e mostre quantos dólares ela pode comprar. Considere US$1,00 = R$3,45.
// let dinheiro = prompt('Digite a quantia em real:(Exemplo: R$5.00)');
// alert('Você possui R$'+dinheiro+'\nEm dollar: $'+((dinheiro/3.45).toFixed(2)));

// Exercise ten
// Faça um algoritmo que leia a largura e altura de uma parede, calcule e mostre a área a ser pintada e a quantidade de tinta necessária para o serviço, sabendo que cada litro de tinta pinta uma área de 2metros quadrados.
// let largura = prompt('Digite o valor da largura');
// let altura = prompt('Digite o valor da altura');
// alert('Área a ser pintada: '+(largura*altura)+'m²'+'\nQuantidade em litros de tinta para cada 2m²: '+(largura*altura)/2);

// Exercise eleven
// Desenvolva uma lógica que leia os valores de A, B e C de uma equação do segundo grau e mostre o valor de Delta.
// let a = parseInt(prompt("Digite o valor de a"));
// let b = parseInt(prompt("Digite o valor de b"));
// let c = parseInt(prompt("Digite o valor de c"));
// alert('O valor de delta é: '+(b*b-4*2*c));


// Exercise twelve
// Crie um programa que leia o preço de um produto, calcule e mostre o seu PREÇO PROMOCIONAL, com 5% de desconto.
// let preco = prompt('Digite o valor do produto :');
// let porcentagem = prompt('Porcentagem');
// alert('O valor do produto com '+porcentagem+'% de desconto '+(preco-((porcentagem/100)*preco)));

// Exercise thirteen
// Faça um algoritmo que leia o salário de um funcionário, calcule e mostre o seu novo salário, com 15% de aumento.
// let salario = parseFloat(prompt('Digite seu salário :'));
// alert('Seu antigo salário é: R$'+salario+'\nSeu novo salário com 15% de aumento é R$'+(salario+(0.15*salario)));

// Exercise fourteen
// A locadora de carros precisa da sua ajuda para cobrar seus serviços. Escreva um programa que pergunte a quantidade de Km percorridos por um carro alugado e a quantidade de dias pelos quais ele foi alugado. Calcule o preço total a pagar, sabendo que o carro custa R$90 por dia e R$0,20 por Km rodado
// let km = parseFloat(prompt("Digite a quantidade de quilometros percorridos(Utilize ' . ' no lugar de ' , ')"));
// let dias = parseFloat(prompt("Quantos dias ficou com o carro?(Utilize ' . ' no lugar de ' , ')"));
// alert('Preço a pagar por quilometros pecorridos: R$'+(km*0.20).toFixed(2)+
//       '\nPreço a pagar por dias com o carro: R$'+(dias*90)+
//       '\nValor total a pagar: R$'+(dias*90+km*0.20).toFixed(2));

// Exercise fifteen
// Crie um programa que leia o número de dias trabalhados em um mês e mostre o salário de um funcionário, sabendo que ele trabalha 8 horas por dia e ganha R$25 por hora trabalhada.
// let dias = parseInt(prompt('Quantos dias você trabalhou no mês?'));
// alert('Seu salário este mês é: R$'+((dias*8)*25));

// Exercise sixteen
// Escreva um programa para calcular a redução do tempo de vida de um fumante. Pergunte a quantidade de cigarros fumados por dias e quantos anos ele já fumou. Considere que um fumante perde 10 min de vida a cada cigarro. Calcule quantos dias de vida um fumante perderá e exiba o total em dias.
// let cigarrosDias = parseInt(prompt('Quantidade de cigarros fumado por dia: '));
// let anosFumou = parseFloat(prompt('Quantos anos fumou?'));
// alert('Você fumou : '+(cigarrosDias*(anosFumou*365))+' cigarros por dia durante o periodo informado'+
//       '\nVocê perdeu : '+(((cigarrosDias*(anosFumou*365)))*10/1440).toFixed(0)+' dias de vida'); 

// Exercise seventeen
// 17) Escreva um programa que pergunte a velocidade de um carro. Caso ultrapasse 80Km/h, exiba uma mensagem dizendo que o usuário foi multado. Nesse caso, exiba o valor da multa, cobrando R$5 por cada Km acima da velocidade permitida.
// let velocidade = parseFloat(prompt('Qual a velocidade do carro?(O valor será convertido em km/h)'));

// if(velocidade > 80) {
//     alert('Você ultrapassou o limite de velocidade. \nVocê foi multado em: R$'+((velocidade-80)*5).toFixed(2)+'')
// }else{
//     alert('Parabéns, você esta abaixo do limite de velocidade');
// }

// Exercuse eightteen
// 18) Faça um programa que leia o ano de nascimento de uma pessoa, calcule a idade dela e depois mostre se ela pode ou não votar.

// let  ano = parseInt(prompt('Qual ano você nasceu?'));
// if (2021 - ano >= 18){
//     alert('Você tem '+(2021 - ano)+' anos, idade suficiente para votar');
    
// }else 
// {
//    alert('Você tem '+(2021 - ano)+' anos, idade insuficiente para votar');
// }

// Exercise nineteen 
// 19) Crie um algoritmo que leia o nome e as duas notas de um aluno, calcule a sua média e mostre na tela. No final, analise a média e mostre se o aluno teve ou não um bom aproveitamento (se ficou acima da média 7.0).


// let nome = prompt('Digite seu nome');
// let media = [];
// media[0] = parseFloat(prompt('Digite sua primeira nota '));
// media[1] = parseFloat(prompt('Digite sua segunda nota '));
// let soma = 0;
// for(var i = 0; i < media.length; i++) {
//     soma += media[i];
// }

// media = (soma/2).toFixed(1);
// console.log(media);

// if (media >=7){
//     alert('Olá '+ nome +' sua média é '+ media +'\nVocê está aprovado');
// }else {
//     alert('Olá '+ nome +' sua média é '+ media +'\nInfelizmente você foi reprovado.');
// }

// Exercise twenty
// 20) Desenvolva um programa que leia um número inteiro e mostre se ele é PAR ou ÍMPAR.

// let numero = parseInt(prompt('Digite um numero inteiro'));
// if (numero % 2 === 0) {
//     alert('O número '+ numero + ' é par.');
// }else {
//     alert('O número '+ numero + ' é impar.');
// }

// Exercise twenty one
// 21) Faça um algoritmo que leia um determinado ano e mostre se ele é ou não BISSEXTO.
// let ano = parseInt(prompt('Digite um ano: '));

// if (ano % 4 === 0 && ano % 100 != 0) {
//     alert('O ano de '+ ano + ' é bissexto.');
// }else {
//     alert('O ano de '+ ano + ' não é bissexto.');
// }

// Exercise twenty two
// 22) Escreva um programa que leia o ano de nascimento de um rapaz e mostre a sua situação em relação ao alistamento militar.
//  - Se estiver antes dos 18 anos, mostre em quantos anos faltam para o alistamento.
//  - Se já tiver depois dos 18 anos, mostre quantos anos já se passaram do alistamento.

// let anoAtual = parseInt(prompt('Digite o ano em que estamos'));
// let ano = parseInt(prompt('Digite o ano em que nasceu'));
// if (anoAtual - ano == 18){
//     alert('Você está na idade para se alistar este ano');
// }else if(anoAtual - ano > 18) {
//     alert('Já se passaram '+ ((anoAtual - ano)-18) +' anos do seu alistamento' );
// }else {
//     alert('Você ainda não tem idade para se alistar, faltam '+ (18-(anoAtual - ano)) +' anos.');
// }

// Exercise twenty three
// 23) Numa promoção exclusiva para o Dia da Mulher, uma loja quer dar descontos para todos, mas especialmente para mulheres. Faça um programa que leia nome, sexo e o valor das compras do cliente e calcule o preço com desconto. Sabendo que:
//  - Homens ganham 5% de desconto
//  - Mulheres ganham 13% de desconto

// let nome = prompt('Digite seu nome');
// let sexo = prompt('Digite seu sexo(M para masculino e F para feminino)');
// if(sexo === "M" || sexo === "m" || sexo === 'F' || sexo === 'f'){
//     let valor = parseFloat(prompt('Digite o valor das compras')).toFixed(2);
    
//     if(sexo === "M" || sexo === "m" ){
//         alert('Olá ' + nome + ', seu desconto é de 5%.\nValor das compras: R$'+ valor +'\nValor com desconto: R$'+ (valor-(0.05*valor))); 
//     }else {
//         alert('Olá ' + nome + ', seu desconto é de 15%.\nValor das compras: R$'+ valor +'\nValor com desconto: R$'+ (valor-(0.15*valor))); 
//     }
// }else {
//     alert('Coloque um sexo valido M ou F, a pagina sera reiniciada');
//     location.reload();
// }

// Exercise twenty four
// 24) Faça um algoritmo que pergunte a distância que um passageiro deseja percorrer em Km. Calcule o preço da passagem cobrando R$0.50 por Km para viagens até 200Km e R$0.45 para viagens mais longas.

let nome = prompt('Digite seu nome:');
let km = prompt('Digite quantos km deseja pecorrer em sua viagem: ');
alert('Seja bem vindo '+ nome +', sua viagem será calculada da seguinte forma: Se a viagem for até 200km será 50centavos por KM, ultrapassando 200km será 45 centavos por km');
if (km > 200){

    alert('Olá '+ nome +' sua viagem deu o total de: \nR$'+ parseFloat((km*0.45).toFixed(2)) );

}else{
    alert('Olá '+ nome +' sua viagem deu o total de: \nR$'+ parseFloat((km*0.50).toFixed(2)) );
}








