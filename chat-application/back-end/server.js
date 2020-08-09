const express = require('express');
const bodyParser = require('body-parser');
const Server = require('http').Server;
const socket = require('socket.io');


/*
 * Vars
 */
const app = express();      // Application Express
const server = Server(app); // Serveur HTTP (http://) servant l'application Express
const io = socket(server);  // Serveur Socket.IO (ws://) rattaché au serveur HTTP
const port = 3001;          // Serveurs http:// & ws:// dispos sur :3001


// GET / --- Page d'accueil du serveur HTTP
app.get('/', (request, response) => {
  response.send(`
    <div style="margin: 5em auto; width: 400px; line-height: 1.5">
     hello
    </div>
  `);
});

/*
 * Serveur central Socket.IO
 */

// IDs uniques des messages échangés à travers le serveur central
let id = 0;

// Lorsqu'un client demande à se connecter au serveur central...
io.on('connection', (ws) => {
  // Le callback reçoit en paramètre le WebSocket (WS) créé sur-mesure

  console.log('>> Socket.IO - new client connected');

  // Le serveur central accueille le nouveau-venu.
  // Il lui envoie un message à lui uniquement (ws.emit())
  ws.emit('greetings', 'Bienvenue');

  // Lorsque le client connecté envoie ses informations,
  // on prévient les éventuels autres clients connectés.
  ws.on('user_infos', ({ nickname }) => {
    ws.broadcast.emit('new_user', {
      nickname,
    })
  });

});

/*
 * Démarrage des serveurs
 */
server.listen(port, () => {
  console.log(`Listening on *:${port}`);
});