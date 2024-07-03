let numero1 = parseInt(prompt("Ingresa el primer número:"));
let numero2 = parseInt(prompt("Ingresa el segundo número:"));

if (numero1 > numero2) {
    console.log("El " + numero1 + " es el número más grande");
} else if (numero2 > numero1) {
    console.log("El " + numero2 + " es el número más grande");
} else {
    console.log("Ambos números son iguales");
}
