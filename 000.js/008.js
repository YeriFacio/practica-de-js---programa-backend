// =================================
//      008 - Objects & JSON
// =================================


// ===============================
//        MINI CHALLENGES
// ===============================

// === Challenge 1: ===
// Crear un objeto "car" con propiedades brand, model y year.
// Mostrar "Mi auto es un Toyota Corolla del 2020."

const car = {
    brand: "Toyota",
    model: "Corolla",
    year: 2020
};
console.log(`Mi auto es un ${car.brand} ${car.model} del ${car.year}.`);


// === Challenge 2: ===
// Crear una función getOlder(person) que reciba un objeto persona y
// devuelva un nuevo objeto con la edad incrementada en 1.
const persona = {
    edad: 19,
};
function getOlder(persona) {
    return {edad: persona.edad + 1}
}
console.log(getOlder(persona))


// === Challenge 3: ===
// Crear una función cloneObject(obj) que retorne una copia exacta del objeto
// sin afectar al original (¡probarlo con console.log!).

const obj = {
    animal: "perro",
}
function cloneObject(obj) {
    
}
console.log(cloneObject(obj))