let numero = parseInt(prompt("Ingresa un número:"));
let divisores = "";

if (numero % 2 === 0) {
    divisores += "2, ";
}

if (numero % 3 === 0) {
    divisores += "3, ";
}

if (numero % 5 === 0) {
    divisores += "5, ";
}

if (numero % 7 === 0) {
    divisores += "7, ";
}

if (divisores !== "") {
    // Eliminar la última coma y espacio
    divisores = divisores.slice(0, -2);
    console.log("El " + numero + " es divisible por " + divisores + ".");
} else {
    console.log("El " + numero + " no es divisible por 2, 3, 5 ni 7.");
}
