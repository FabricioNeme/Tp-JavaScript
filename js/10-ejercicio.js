let numero = parseInt(prompt("Ingresa un número:"));

if (numero % 2 === 0) {
    console.log("El " + numero + " es divisible por 2.");
} else if (numero % 3 === 0) {
    console.log("El " + numero + " es divisible por 3.");
} else if (numero % 5 === 0) {
    console.log("El " + numero + " es divisible por 5.");
} else if (numero % 7 === 0) {
    console.log("El " + numero + " es divisible por 7.");
} else {
    console.log("El " + numero + " no es divisible por 2, 3, 5 ni 7.");
}
