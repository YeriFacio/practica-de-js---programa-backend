//1
function edad(a, b) {
    return a + b;
}
const multiplicar = (a, b) => a * b;

console.log(multiplicar(5, 4))

//2
function nombre(anahi) {
    return "hola " + anahi;
}
console.log(nombre("anahi"))

// 3 - lista de objetos
list = ["anana", "pera", "uva", "durazno","naranja", "sandia"]

console.log( nombre(" anahi") + " compre una " + list[0] + " en el coto")

list.push("kiwi")
console.log(list[6])

//4 - interacciones  - for = bucle


// ejercicios

// Escriban una función llamada sigma con un argumento que representa el número n.
// La función tiene que devolver la suma de todos los números desde 1 hasta n (inclusive).
// Por ejemplo, para sigma(5), la función devuelve 15, porque 15 = 1 + 2 + 3 + 4 + 5.

// intento del primer ejercicio - mal hecho
let sigma = [0,1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
for (let n = 0; n <= 10 ; n++) {
    let suma = sigma[n] + sigma[n]
    console.log(suma)   
}
// 1 ejercicio - bien hecho
console.log("bien hecho")

function sigma2(n) {
    let suma = 0;

    for (let i = 0; i <= n; i++){
        suma = suma + i;
    }
    return suma;
}
console.log(sigma2(10));

// 2° ejercicio

// usar if y else 

// Escriban una función llamada isValid que reciba dos argumentos de tipo string, username y password.
// La función devuelve true si el username y password son válidos en el sistema, de lo contrario false.
// Nuestro sistema contiene solo dos nombres de usuario válidos - "admin" y "user".
// La contraseña válida para el nombre de usuario "user" es "qweasd".
// Para el nombre de usuario "admin" cualquier contraseña es válida!
function isValid(username, password) {
    if (username === "admin") {
        return true;
    } else if (username === "user" && password === "qweasd") {
        return true;
    }
    return false;
}
console.log(isValid("admin"))

// tambien se puede hacer como en el siguiente ejemplo
// function isValid(username, password) {
//   if (username === "admin" || username === "user" && password === "qweasd") {
//       return true;
//   }
//   return false;
// }
// console.log(isValid("admin"))

// ===================================================
//                 007 - strings
//                 mini challenge
// ==================================================

// === Challenge 1 ===
// Dado un nombre completo, mostralo en mayúsculas y sin espacios extras.

let nombreCompleto = "  Anahi  Martinez  "
 console.log(nombreCompleto.trim().toUpperCase())

// === Challenge 2 ===
// Dado un email, verificá si contiene "@" y termina con ".com".

let email = "anahi@mail.com"
console.log(email.includes("@") && email.endsWith(".com"))

// === Challenge 3: ===
// Escribí una función que reciba un string y devuelva cuántas vocales tiene.

let word = "programacion"
console.log("Cantidad de vocales en la palabra " + word + " = ", word.length)

// === Challenge 4: ===
// Usá template literals para mostrar un mensaje con variables.

let user = "Anahi"
let mensaje = "¿como estas?"
console.log(`Hola, ${user}! ${mensaje}`)

// === CHALLENGE FINAL: PASSWORD VALIDATOR ===
// Crea una función llamada isValidPassword() que reciba un string
// y devuelva true si cumple con las siguientes condiciones:
// - Al menos 8 caracteres
// - Contiene una mayúscula
// - Contiene una minúscula
// - Contiene un número
// - Contiene un símbolo (!@#$%^&*)

// Bonus: devolver un mensaje indicando qué condición no se cumple.

let password = "Anahi123!"
function isValidpassword(password1) {
    if (password.length < 8) {
        return "la contraseña debe tener al menos 8 caracteres"
    } console.log(password.length)
    if (password.startsWith(" A-Z")) {
        return "la contraseña debe tener al menos una mayúscula"
    } console.log(password.startsWith(" A-Z"))
    if (password.startsWith(" a-z")) {
        return "la contraseña debe tener al menos una minúscula"
    } console.log(password.startsWith(" a-z"))
    if (password.startsWith(" 0-9")) {
        return "la contraseña debe tener al menos un número"
    } console.log(password.startsWith(" 0-9"))
    if (password.startsWith(" !@#$%^&*")) {
        return "la contraseña debe tener al menos un símbolo"
    } console.log(password.startsWith(" !@#$%^&*"))
    return true;
}
console.log(isValidpassword(password))

