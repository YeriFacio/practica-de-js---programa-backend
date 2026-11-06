// 1° intento

console.log("1° intento")

let password = "anahi123!"
function isValidpassword(password) {
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

// 2° intento

console.log("2° intento")

let password1 = "Masha123!"
function isValidpassword(password1) {
    if (password1.length < 8) {
        return "la contraseña debe tener al menos 8 caracteres"
    } 
    if (password1.startsWith(" A-Z")) {
        return "la contraseña debe tener al menos una mayúscula"
    } 
    if (password1.startsWith(" a-z")) {
        return "la contraseña debe tener al menos una minúscula"
    } 
    if (password1.startsWith(" 0-9")) {
        return "la contraseña debe tener al menos un número"
    } 
    if (password1.startsWith(" !@#$%^&*")) {
        return "la contraseña debe tener al menos un símbolo"
    } 
    return true;
}
console.log(isValidpassword(password1))

// 3° intento

console.log("3° intento")

let password2 = "Sofia123!"
function isValidpassword(password2) {
    if (password2.length < 8) {
        return "la contraseña debe tener al menos 8 caracteres"
    } 
    if (password2.startsWith(" A-Z")) {
        return "la contraseña debe tener al menos una mayúscula"
    } 
    if (password2.startsWith(" a-z")) {
        return "la contraseña debe tener al menos una minúscula"
    } 
    if (password2.startsWith(" 0-9")) {
        return "la contraseña debe tener al menos un número"
    }
    if (password2.startsWith(" !@#$%^&*")) {    
        return "la contraseña debe tener al menos un símbolo"
    } 
}
console.log(isValidpassword(password2))

