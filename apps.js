const WebSocket = require('ws');
const server = new WebSocket.Server({ port: process.env.PORT || 8080 });

server.on('connection', (socket) => {
    console.log('Nueva conexión de cliente');

    socket.on('message', (message) => {
        console.log('Mensaje recibido:', message);
        socket.send(`Mensaje recibido: ${message}`);
    });

    socket.on('close', () => {
        console.log('Cliente desconectado');
    });
});

console.log(`Servidor WebSocket corriendo en el puerto ${process.env.PORT || 8080}`);
