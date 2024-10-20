import express from "express"; // Importamos express de la carpeta "node_modules", este archivo va a levantar la aplicación
import "dotenv/config.js" // Nos poermite acceder a las variables de entorno

const server = express(); //creamos la variable server donde se ejecutara express

const PORT = process.env.PORT || 8080 //variable PORT donde se almacenara la ruta al servidor (variable de entorno)

const ready = () => {
    console.log("server ready in port: " +PORT); //funcion parea retornar el estado en la terminal
}

server.listen(PORT,ready) //utilizamos la propiedad "listen" para escuchar el puerto y levantar el servidor

console.log(process.env.PORT); //para ver las variables de entorno
