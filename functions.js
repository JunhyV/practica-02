function mayorDeTres(num1, num2, num3) {
    if (num1 > num2 && num1 > num3) {
        console.log("El número mayor es " + num1);
    } else if (num2 > 1 && num2 > num3) {
        console.log("El número mayor es " + num2);
    }  
    else {
        console.log("El número mayor es " + num3);
    }
}

function resultado(calificacion) {
    if (calificacion <= 10){
        return "Sobresaliente"
    } else if (calificacion <= 9 || calificacion <=7){
        return "Bien"
    } else if (calificacion <= 6 || calificacion>=0){
        return "Malo"
    } else {
        return "Ingresa un numero de 0 - 10"
    }
}

function operaciones(num1, num2) {
    if (operacion === 1) {
        console.log(num1 + num2);
    } else if (operacion === 2) {
        console.log(num1 - num2);
    } else if (operacion === 3) {
        console.log(num1 * num2);
    } else if (operacion === 4) {
        console.log(num1 / num2);
    } else {
        console.log("Operacion incorrecta");
    }
}

let num1 = 22;
let num2 = 33;
let num3 = 42;

let operacion = 2;

mayorDeTres(num1, num2, num3);
operaciones(num1, num2);

console.log(resultado(10));