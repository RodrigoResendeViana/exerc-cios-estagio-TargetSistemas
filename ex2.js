let num1 = 0;
let num2 = 1;
let auxiliar = 0;
const ehFibonacci = 55;

while (num2 < ehFibonacci) {
    auxiliar = num2;
    num2 += num1
    num1 = auxiliar
}

if (num2 === ehFibonacci) {
    console.log(`${ehFibonacci} pertence a sequencia Fibonacci`)
} else {
    console.log(`${ehFibonacci} não pertence a sequencia Fibonacci`)
}