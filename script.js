//Ejercicio 1

let nombre = "Juan"

const apellido = "Lopez"

nombre = "Pedro"

console.log(nombre, apellido)

//Ejercicio 2

let sanitarios = (p1,p2,p3,p4,p5) => {
    return p1 + p2 + p3 + p4 + p5
}

sanitarios(1,2,3,4,5)


//Ejercicio 3
//iva
let iva = (num1,num2) => {
    return num1 / num2
}

iva(21,100)


let totalFactura = (sanitarios,iva) => {
    return sanitarios + iva
}

totalFactura(15,0.21)

console.log(totalFactura(15,0.21))

//Ejercicio 4

let dato = prompt('Escriba su nombre')

let dato2 = prompt('Escriba su apellido')

alert("Buenos dias" + " " + dato + " " + dato2)


//Ejercicio 5
let fecha = prompt('Escriba su año de naciomiento')

let años = (años, fecha) => {
    return años - fecha
}

años(2021,fecha)

console.log(años(2021,fecha))

alert("Su edad es" + " " +años(2021,fecha))
