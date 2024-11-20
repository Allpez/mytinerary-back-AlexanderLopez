//Archivo que sera la conexion a la base de datos.

import mongoose from "mongoose"; //Utilizamos la libreria mongoose para conectarnos a la base de datos.

let url = process.env.URI_MONGO// La URL de la conexion a la base de datos MondoDB.

//Funcion que realiza la conexion a la base de datos.
async function connectionDataBase() {
    try {
        await mongoose.connect(url)
        console.log("Data base connected");
    } catch (error) {
        console.log(error)
    }
}

connectionDataBase()