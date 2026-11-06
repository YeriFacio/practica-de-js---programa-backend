import {createServer} from 'http';

const users = [
  { id: 1, name: 'masha', numheroe: '73' },
  { id: 2, name: 'Layla', numheroe: '62' },
  { id: 3, name: 'aulus', numheroe: '38' },
];

const server = createServer((req, res) => {
   const method = req.method
    const url = req.url
}
)
