
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
