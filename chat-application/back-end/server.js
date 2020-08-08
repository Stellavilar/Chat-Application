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

  // Lorsque le client connecté envoie un message au serveur central sur son WS
  ws.on('send_message', (message) => {
    // Objectif du serveur central : générer un ID unique pour le message reçu,
    // et transmettre le message.

    // eslint-disable-next-line no-plusplus
    // ID unique rattaché au message reçu
    message.id = ++id;

    // Transmission du message aux clients connecté (io.emit et non pas ws.emit)
    io.emit('send_message', message);
  });
});

/*
 * Démarrage des serveurs
 */
server.listen(port, () => {
  console.log(`Listening on *:${port}`);
});