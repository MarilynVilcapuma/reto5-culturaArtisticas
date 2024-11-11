// Importar la librería
const express = require('express');

// Agrega el puerto
const PORT = 3000;

// Objetos para llamar los métodos de express
const app = express();

// Ruta inicial
app.get('/', (req, resp) => {
    resp.send("Estimados Estudiantes estamos con NODEJS EN UBUNTU");
});

// Ruta de archivos estáticos
app.use(express.static("public"));

// Escucha conexiones en el puerto 3000 y muestra por consola la dirección web.
app.listen(PORT, () => console.log(`http://52.55.87.45:${PORT}`));
