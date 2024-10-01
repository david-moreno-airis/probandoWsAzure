// Importa el módulo http
const http = require('http');

// Configura el puerto en el que el servidor escuchará
const PORT = 3000;

// Crea el servidor
const server = http.createServer((req, res) => {
    // Establece el encabezado de la respuesta
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    
    // Escribe un mensaje en la respuesta
    res.write('Hola, mundo');
    
    // Finaliza la respuesta
    res.end();
});

// El servidor comienza a escuchar en el puerto especificado
server.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
