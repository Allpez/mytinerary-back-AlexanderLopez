import express from "express"; // Importamos express de la carpeta "node_modules", este archivo va a levantar la aplicación
import "dotenv/config.js" // Nos poermite acceder a las variables de entorno.
import "./config/database.js" // Llamamos la conexion a la base de datos.
import cors from "cors" //Seguridad, nos permite tener un filtro para el control de peticiones externas.
import morgan from "morgan" //Libreria que nos ayuda a llevar un registro de las peiciones en consola que recibimos.
import routerIndex from "./router/index.js"

//Importamops los middlewares
import not_found_handler from "./middlewares/not_found_handler.js"
import error_handler from "./middlewares/error_handler.js"
import bad_request from "./middlewares/bad_request.js"

const server = express(); //creamos la variable server donde se ejecutara express

const PORT = process.env.PORT || 8080 //variable PORT donde se almacenara la ruta al servidor (variable de entorno)

const ready = () => {
    console.log("server ready in port: " + PORT); //funcion parea retornar el estado en la terminal
}

//middleware importantes para express, se coloican sobre el listener antes de levantar el servidor para que sepa que middleware se le van a aplicar en base
server.use(express.json()) //las peticiones que va a recibir y responder seran en formato JSON
server.use(express.urlencoded({ extended: true })) //Nos permite recibir parametros y querys complejos
server.use(cors()) //filtro para controlar las peticiones externas / origenes cruzados
server.use(morgan('dev')) // libreria que nos va a ayudar a controlar y ver las peticiones HTTP que lleguen al servidor

console.log(process.env.PORT); //para ver las variables de entorno

//Configuracion del router
server.use('/api', routerIndex)
server.use(bad_request)
server.use(not_found_handler)
server.use(error_handler)



server.listen(PORT, ready) //utilizamos la propiedad "listen" para escuchar el puerto y levantar el servidor
