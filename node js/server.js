const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  fs.readFile('result.html', (err, data) => {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
      res.end('<h1>⚠️ Aucun résultat trouvé. Lancez app.js pour générer la page.</h1>');
    } else {
      res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
      res.end(data);
    }
  });
});

server.listen(3000, () => {
  console.log('🚀 Serveur démarré sur http://localhost:3000');
});
