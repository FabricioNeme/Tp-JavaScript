let frase = prompt("Ingresa una frase:");
let vocalesEncontradas = "";

for (let i = 0; i < frase.length; i++) {
    let caracter = frase.charAt(i).toLowerCase(); // Convertir a minúscula para comparar

    if (caracter === 'a' || caracter === 'e' || caracter === 'i' || caracter === 'o' || caracter === 'u') {
        vocalesEncontradas += caracter;
    }
}

console.log("Las vocales que aparecen en la frase son: " + vocalesEncontradas);
