import "dotenv/config.js"
import "../../config/database.js"
import User from "../User.js"

let users = [
    {
        firstname: "Alexander",
        lastname: "Lopez",
        email: "alexanderlopez@backend.com",
        password: "Alex1234!",
        photo: "https://www.clinicaveterinariaaguilar.es/wp-content/uploads/2020/01/cachorro.jpg",
        country: "Venezuela"
    },
    {
        firstname: "Jose",
        lastname: "Lopez",
        email: "joselopez@backend.com",
        password: "Alex4321!",
        photo: "https://as01.epimg.net/diarioas/imagenes/2022/05/29/actualidad/1653826510_995351_1653826595_noticia_normal_recorte1.jpg",
        country: "Colombia"
    }
];

User.insertMany(users)