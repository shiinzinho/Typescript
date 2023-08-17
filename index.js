"use strict";
//teste 1
let number = 100;
let secNumber = 200;
console.log(number + ' + ' + secNumber + ' é igual a ' + (number + secNumber));
//teste 2
let old = 17;
let text = ' é minha idade';
console.log(old + text);
//teste 3
let newOld = 20;
let newText = 'a minha idade é ';
console.log(newText + newOld);
//teste 4
let real = false;
console.log(real);
//teste 5
let arr = [1, 2, 3];
console.log(arr);
console.log('tamanho do array: ' + arr);
console.log('acessando a posição do array: ' + arr[2]);
console.log(arr.indexOf(1));
console.log(arr[2]);
//teste 6
let arrayText;
arrayText = ['a', 'b', 'c', 'd'];
console.log(arrayText);
console.log(arrayText.length);
console.log(arrayText.indexOf('c'));
//teste 7 [funções]
function displayText() {
    console.log('exibindo meu texto');
}
displayText();
//teste 8
function displayNewText() {
    return 'exibindo meu texto novo';
}
console.log(displayNewText());
//teste 9
function returnNumber() {
    return 17;
}
console.log(returnNumber());
//teste 10
function returnText() {
    return 'rsrs';
}
console.log(returnText());
//teste 11
function add(a, b) {
    return a + b;
}
console.log('o valor da soma é', add(50, 100));
//exercicio 1
function exercicioUm(a, b) {
    return a * b;
}
console.log('o valor da multiplicação é', exercicioUm(10, 20));
//exercicio 2
function exercicioDois(a, b, c) {
    return (a + b) * c;
}
console.log('o valor da equação é', exercicioDois(10, 20, 30));
//exercicio 3
function exercicioTres(a, b) {
    return 'o resultado da multiplicação é: ' + (a + b);
}
console.log(exercicioTres(10, 20));
