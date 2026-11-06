// ====================================================
// INTRODUCCIÓN A NODE.JS Y SERVIDOR HTTP
// ====================================================


// === pactica ===  correcion de errores 
// ahora esta bien hecho y funciona correctamente

import { createServer } from 'http'

const users = [
  { id: 1, name: 'Miya', rol: 'tirador' },
  { id: 2, name: 'Balmond', rol: 'combatiente' },
  { id: 3, name: 'Saber', rol: 'asesino' },
  { id: 4, name: 'Alice', rol: 'mago' },
  { id: 5, name: 'Nana', rol: 'mago' },
  { id: 6, name: 'Tigreal', rol: 'tanque' },
  { id: 7, name: 'Alucard', rol: 'asesino' },
  { id: 8, name: 'Karina', rol: 'asesino' },
  { id: 9, name: 'Akai', rol: 'tanque' },
  { id: 10, name: 'Franco', rol: 'tanque' },
  { id: 11, name: 'Bane', rol: 'combatiente' },
];

const server = createServer((req, res) => {
    // const {method, url} = req;
    const method = req.method
    const url = req.url

    // endpoint ruta raiz
    // if (method === 'GET' && url === '/users/:id')
    if (method === 'GET' && url.startsWith('/users/')) {
        const id = parseInt(url.split('/')[2])
        const user = users.find(user => user.id === id)
        if (!user) {
            res.writeHead(404, { 'Content-Type': 'text/plain' })
            res.end('usuario no encontrado')
            return;
        }
        res.writeHead(200, { 'Content-Type' : 'application/json' })
        res.end(JSON.stringify(user))
        return;
    }

    res.writeHead(404, { 'Content-Type': 'text/plain' })
    res.end('ruta no encontrada')

}
)

const PORT = 3000

server.listen(PORT, () => {
    console.log(`Servidor corriendo `)
}
)

// entrar al link para ver el resultado: http://localhost:3000/users/:id
// ejemplo: http://localhost:3000/users/4