const prompt = require ('prompt-sync')();

let num1 = Number(prompt('Digita el primer numero: '));
let num2 = Number(prompt('Digita el segundo numero: '));
let num3 = Number(prompt('Digita el tercer numero: '));
let mayor, medio, menor;
let contador = 0;

while (contador < 1){
    if (num1 === num2 && num2 === num3){;
        console.log ('Los numeros son iguales.');

    } else if (num1 > num2 && num1 > num3) {
    mayor = num1;
    if (num2 > num3) {
      medio = num2;
      menor = num3;
    } else {
      medio = num3;
      menor = num2;
    }
  } else if (num2 > num1 && num2 > num3) {
    mayor = num2;
    if (num1 > num3) {
      medio = num1;
      menor = num3;
    } else {
      medio = num3;
      menor = num1;
    }
  } else {
    mayor = num3;
    if (num1 > num2) {
      medio = num1;
      menor = num2;
    } else {
      medio = num2;
      menor = num1;
    }
  }

  console.log("De menor a mayor:", menor, medio, mayor);
  console.log("De mayor a menor:", mayor, medio, menor);
  console.log("Menor:", menor);
  console.log("Del centro:", medio);
  console.log("Mayor:", mayor);
}