// ============================================
//               013 - Promises
// ============================================

function getNumberAsync() {
    return new Promise((resolve, reject) => {
        const number = Math.floor(Math.random() * 7)
        setTimeout(() => {
            if (number > 2) {
                resolve(number)
            } else {
                reject("el numero es demasiado bajo")
            }
        }, 1000)
    })
}

console.log("esperando numero")

getNumberAsync()
    .then((number) => {
        console.log("el numero es: ", number)
    })
    .catch((error) => {
        console.log("error: ", error)
    })
    .finally(() => {
        console.log("fin de la promesa")
    })