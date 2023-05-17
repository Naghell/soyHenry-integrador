const http = require('http');
const characters = require('./utils/data');
const PORT = 3001;

http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');

    if (req.url.includes('rickandmorty/character')) {
        const id = req.url.split('/').at(-1);
        const character = characters.filter(character => character.id === Number(id));

        res.writeHead(200, {"Content-Type": "application/json"}).end(JSON.stringify(character[0]));
    }
}).listen(PORT);