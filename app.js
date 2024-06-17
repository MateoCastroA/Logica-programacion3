let num = parseInt(prompt("Escriba un número y se retornará su factorial"))

let fact = 1

function factorial(num) {
    if (isNaN(num)) {
        return "Entrada inválida";
    } else if (num < 0) {
        return "No se puede calcular el factorial de un número negativo";
    } else if (num === 0) {
        return 1;
    } else {
        fact *= num
        factorial(num-1)
        return fact
    }
}

console.log (factorial(num))