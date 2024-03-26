const string = "Boa";
let stringReversa = "";
let caracter = "";

for(let contador = 1; contador <= string.length; contador++) {
    caracter = string[string.length - contador];
    stringReversa += caracter;
}

console.log(stringReversa);
