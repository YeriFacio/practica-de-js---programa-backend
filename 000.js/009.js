// ====================================================
// INTRODUCCIÓN A NODE.JS Y SERVIDOR HTTP
// ====================================================


// === pactica ===

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
  { id: 12, name: 'Bruno', rol: 'tirador' },
  { id: 13, name: 'Clint', rol: 'tirador' },
  { id: 14, name: 'Rafaela', rol: 'soporte' },
  { id: 15, name: 'Eudora', rol: 'mago' },
  { id: 16, name: 'Zilong', rol: 'combatiente' },
  { id: 17, name: 'Fanny', rol: 'asesino' },
  { id: 18, name: 'Layla', rol: 'tirador' },
  { id: 19, name: 'Minotaur', rol: 'tanque' },
  { id: 20, name: 'Lolita', rol: 'tanque' },
  { id: 21, name: 'Hayabusa', rol: 'asesino' },
  { id: 22, name: 'Freya', rol: 'combatiente' },
  { id: 23, name: 'Gord', rol: 'mago' },
  { id: 24, name: 'Natalia', rol: 'asesino' },
  { id: 25, name: 'Kagura', rol: 'mago' },
  { id: 26, name: 'Chou', rol: 'combatiente' },
  { id: 27, name: 'Sun', rol: 'combatiente' },
  { id: 28, name: 'Alpha', rol: 'combatiente' },
  { id: 29, name: 'Ruby', rol: 'combatiente' },
  { id: 30, name: 'Yi Sun-shin', rol: 'asesino' },
  { id: 31, name: 'Moskov', rol: 'tirador' },
  { id: 32, name: 'Johnson', rol: 'tanque' },
  { id: 33, name: 'Cyclops', rol: 'mago' },
  { id: 34, name: 'Estes', rol: 'soporte' },
  { id: 35, name: 'Hilda', rol: 'combatiente' },
  { id: 36, name: 'Aurora', rol: 'mago' },
  { id: 37, name: 'Lapu-Lapu', rol: 'combatiente' },
  { id: 38, name: 'Vexana', rol: 'mago' },
  { id: 39, name: 'Roger', rol: 'combatiente' },
  { id: 40, name: 'Karrie', rol: 'tirador' },
  { id: 41, name: 'Gatotkaca', rol: 'tanque' },
  { id: 42, name: 'Harley', rol: 'mago' },
  { id: 43, name: 'Irithel', rol: 'tirador' },
  { id: 44, name: 'Grock', rol: 'tanque' },
  { id: 45, name: 'Argus', rol: 'combatiente' },
  { id: 46, name: 'Odette', rol: 'mago' },
  { id: 47, name: 'Lancelot', rol: 'asesino' },
  { id: 48, name: 'Diggie', rol: 'soporte' },
  { id: 49, name: 'Hylos', rol: 'tanque' },
  { id: 50, name: 'Zhask', rol: 'mago' },
  { id: 51, name: 'Helcurt', rol: 'asesino' },
  { id: 52, name: 'Pharsa', rol: 'mago' },
  { id: 53, name: 'Lesley', rol: 'tirador' },
  { id: 54, name: 'Jawhead', rol: 'combatiente' },
  { id: 55, name: 'Angela', rol: 'soporte' },
  { id: 56, name: 'Gusion', rol: 'asesino' },
  { id: 57, name: 'Valir', rol: 'mago' },
  { id: 58, name: 'Martis', rol: 'combatiente' },
  { id: 59, name: 'Uranus', rol: 'tanque' },
  { id: 60, name: 'Hanabi', rol: 'tirador' },
  { id: 61, name: "Chang'e", rol: 'mago' },
  { id: 62, name: 'Kaja', rol: 'soporte' },
  { id: 63, name: 'Selena', rol: 'asesino' },
  { id: 64, name: 'Aldous', rol: 'combatiente' },
  { id: 65, name: 'Claude', rol: 'tirador' },
  { id: 66, name: 'Vale', rol: 'mago' },
  { id: 67, name: 'Leomord', rol: 'combatiente' },
  { id: 68, name: 'Lunox', rol: 'mago' },
  { id: 69, name: 'Hanzo', rol: 'asesino' },
  { id: 70, name: 'Belerick', rol: 'tanque' },
  { id: 71, name: 'Kimmy', rol: 'tirador' },
  { id: 72, name: 'Thamuz', rol: 'combatiente' },
  { id: 73, name: 'Harith', rol: 'mago' },
  { id: 74, name: 'Minsitthar', rol: 'combatiente' },
  { id: 75, name: 'Kadita', rol: 'mago' },
  { id: 76, name: 'Faramis', rol: 'soporte' },
  { id: 77, name: 'Badang', rol: 'combatiente' },
  { id: 78, name: 'Khufra', rol: 'tanque' },
  { id: 79, name: 'Granger', rol: 'tirador' },
  { id: 80, name: 'Guinevere', rol: 'combatiente' },
  { id: 81, name: 'Esmeralda', rol: 'mago' },
  { id: 82, name: 'Terizla', rol: 'combatiente' },
  { id: 83, name: 'X.Borg', rol: 'combatiente' },
  { id: 84, name: 'Ling', rol: 'asesino' },
  { id: 85, name: 'Dyrroth', rol: 'combatiente' },
  { id: 86, name: 'Lylia', rol: 'mago' },
  { id: 87, name: 'Baxia', rol: 'tanque' },
  { id: 88, name: 'Masha', rol: 'combatiente' },
  { id: 89, name: 'Wanwan', rol: 'tirador' },
  { id: 90, name: 'Silvanna', rol: 'combatiente' },
  { id: 91, name: 'Cecilion', rol: 'mago' },
  { id: 92, name: 'Carmilla', rol: 'soporte' },
  { id: 93, name: 'Atlas', rol: 'tanque' },
  { id: 94, name: 'Popol and Kupa', rol: 'tirador' },
  { id: 95, name: 'Yu Zhong', rol: 'combatiente' },
  { id: 96, name: 'Luo Yi', rol: 'mago' },
  { id: 97, name: 'Benedetta', rol: 'asesino' },
  { id: 98, name: 'Khaleed', rol: 'combatiente' },
  { id: 99, name: 'Barats', rol: 'tanque' },
  { id: 100, name: 'Brody', rol: 'tirador' },
  { id: 101, name: 'Yve', rol: 'mago' },
  { id: 102, name: 'Mathilda', rol: 'soporte' },
  { id: 103, name: 'Paquito', rol: 'combatiente' },
  { id: 104, name: 'Gloo', rol: 'tanque' },
  { id: 105, name: 'Beatrix', rol: 'tirador' },
  { id: 106, name: 'Phoveus', rol: 'combatiente' },
  { id: 107, name: 'Natan', rol: 'tirador' },
  { id: 108, name: 'Aulus', rol: 'combatiente' },
  { id: 109, name: 'Aamon', rol: 'asesino' },
  { id: 110, name: 'Valentina', rol: 'mago' },
  { id: 111, name: 'Edith', rol: 'tanque' },
  { id: 112, name: 'Floryn', rol: 'soporte' },
  { id: 113, name: 'Yin', rol: 'combatiente' },
  { id: 114, name: 'Melissa', rol: 'tirador' },
  { id: 115, name: 'Xavier', rol: 'mago' },
  { id: 116, name: 'Julian', rol: 'combatiente' },
  { id: 117, name: 'Fredrinn', rol: 'tanque' },
  { id: 118, name: 'Joy', rol: 'asesino' },
  { id: 119, name: 'Novaria', rol: 'mago' },
  { id: 120, name: 'Arlott', rol: 'combatiente' },
  { id: 121, name: 'Ixia', rol: 'tirador' },
  { id: 122, name: 'Nolan', rol: 'asesino' },
  { id: 123, name: 'Cici', rol: 'combatiente' },
  { id: 124, name: 'Chip', rol: 'soporte' },
  { id: 125, name: 'Zhuxin', rol: 'mago' },
  { id: 126, name: 'Suyou', rol: 'asesino' },
  { id: 127, name: 'Lukas', rol: 'combatiente' },
  { id: 128, name: 'Kalea', rol: 'soporte' },
  { id: 129, name: 'Zetian', rol: 'mago' },
  { id: 130, name: 'Obsidia', rol: 'tirador' },
  { id: 131, name: 'Sora', rol: 'combatiente' },
  { id: 132, name: 'Marcel', rol: 'tirador' },
  { id: 133, name: 'Hirara', rol: 'asesino' },
];

const server = createServer((req, res) => {
    // const {method, url} = req;
    const method = req.method
    const url = req.url

    // endpoint ruta raiz
    if (method === 'GET' && url === '/users/:id') {
        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify(users))
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